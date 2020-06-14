package com.boshimao.movie.controllers;

import com.boshimao.movie.beans.*;
import com.boshimao.movie.mappers.MovieMapper;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Controller
public class TopicController {

    @Autowired
    private MovieMapper mapper;

    @RequestMapping(value = "/itemTopic")
    public String itemTopic(Model model, int id, HttpSession session) {
        Topic topic = mapper.getTopicById(id);
        //阅读量更新
        mapper.updateTopicReadCountById(id);
        model.addAttribute("topic", topic);
        int bid = topic.getBid();
        String type = topic.getType();
        String name = "";
        if (type.equals("1")) {
            //书籍
            Book book = mapper.getBookById(bid);
            name = book.getName();
        }
        if (type.equals("2")) {
            //电影
            Movie movie = mapper.getMovieById(bid);
            name = movie.getName();
        }
        model.addAttribute("name", name);
        List<Tiezi> listTiezi = mapper.getTieziListByTopicId(id);
        model.addAttribute("listTiezi", listTiezi);
        model.addAttribute("tieziTotal", listTiezi.size());
        List<Group> allGroup = mapper.getGroupList();
        int totalMember = 0;
        for (Group group : allGroup) {
            if (!StringUtils.isEmpty(group.getMembers())) {
                for (String idd : group.getMembers().split(",")) {
                    if (idd.equals(String.valueOf(topic.getUid()))) {
                        totalMember++;
                    }
                }
            }
        }
        model.addAttribute("totalUserMember", totalMember);
        List<Tiezi> listTieziUser = mapper.getTieziListByUserId(topic.getUid());
        model.addAttribute("totalUserTiezi", listTieziUser.size());
        return "itemTopic";
    }

    @RequestMapping(value = "/itemTopicInfo")
    public String itemTopicInfo(Model model, int bid, int type) {
        if (type == 1) {
            return "redirect:/book?id=" + bid;
        }
        if (type == 2) {
            return "redirect:/movie?id=" + bid;
        }
        return "/index";
    }

    @RequestMapping("addTopicComm")
    @ResponseBody
    public String addTopicComm(Model model, Tiezi tiezi, HttpSession session) {
        if (null == tiezi || StringUtils.isEmpty(tiezi.getContent())) {
            return "必输信息不可为空";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "请先登陆";
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = format.format(new Date(System.currentTimeMillis()));
        tiezi.setTime(dateStr);
        tiezi.setUid(Integer.valueOf((Integer) uid));
        if (mapper.insertTiezi(tiezi) > 0) {
            return "发布成功";
        }
        return "发布失败";
    }

    @RequestMapping(value = "/zanTopic")
    public String zanTopic(Model model, int id, @RequestParam(required = false) Integer mid, HttpSession session, @RequestParam(required = false) String type) {
        if (StringUtils.isEmpty(id)) {
            return "redirect:/index";
        }
        mapper.updateTieziZanById(id);
        if (!StringUtils.isEmpty(type)) {
            if (type.equals("1")) {
                return "redirect:/book?id=" + mid;
            } else {
                return "redirect:/movie?id=" + mid;
            }
        }
        if (StringUtils.isEmpty(mid)) {
            return "redirect:/index";
        } else {
            return "redirect:/itemTopic?id=" + mid;
        }
    }

    @RequestMapping(value = "/fanduiTopic")
    public String fanduiTopic(Model model, int id, @RequestParam(required = false) Integer mid, HttpSession session, @RequestParam(required = false) String type) {
        if (StringUtils.isEmpty(id)) {
            return "redirect:/index";
        }
        mapper.updateTieziFanduiById(id);
        if (!StringUtils.isEmpty(type)) {
            if (type.equals("1")) {
                return "redirect:/book?id=" + mid;
            } else {
                return "redirect:/movie?id=" + mid;
            }
        }
        if (StringUtils.isEmpty(mid)) {
            return "redirect:/index";
        } else {
            return "redirect:/itemTopic?id=" + mid;
        }
    }

    @GetMapping("/addTopic")
    public String addTopic() {
        return "addtopic";
    }

    @PostMapping("/addTopic")
    @ResponseBody
    public String addTopic(Topic topic, HttpSession session) {

        if (null == topic || StringUtils.isEmpty(topic.getTitle()) || StringUtils.isEmpty(topic.getContent())) {
            return "必输信息不可为空";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "请先登陆";
        }
        if (StringUtils.isEmpty(topic.getBid())) {
            topic.setType("3");
            topic.setBid(-1);
        }
        System.out.println(uid);
        topic.setUid(Integer.valueOf((Integer) uid));
        System.out.println(topic);
        if (mapper.insertTopic(topic) > 0) {
            return "发布成功";
        }
        return "发布失败";
    }


    //新增话题时管理书籍或者电影
    @RequestMapping("/searchMB")
    @ResponseBody
    public List<Res> searchMB(String search) {
        List<Res> result = new ArrayList<>();
        List<Movie> movieList = mapper.searchMovieList(search);
        for (Movie movie : movieList) {
            result.add(new Res(movie.getId(), "2"));
        }
        List<Book> bookList = mapper.searchBookList(search);
        for (Book book : bookList) {
            result.add(new Res(book.getId(), "1"));
        }
        // System.out.println(result.toString());
        return result;
    }

    class Res {
        int id;
        String type;

        public Res(int id, String type) {
            this.id = id;
            this.type = type;
        }

        @Override
        public String toString() {
            return "Res{" +
                    "id=" + id +
                    ", type='" + type + '\'' +
                    '}';
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }
    }


}
