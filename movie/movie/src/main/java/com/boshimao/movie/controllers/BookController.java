package com.boshimao.movie.controllers;

import com.boshimao.movie.beans.*;
import com.boshimao.movie.mappers.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

@Controller
public class BookController {


    @Autowired
    MovieMapper mapper;

    @RequestMapping(value = "/book")
    public String book(Model model, int id, HttpSession session) {
        Book book = mapper.getBookById(id);
        List<Comments> commentsList = mapper.getCommentsByIdAndType(id, 1);
        List<Tiezi> topicList = mapper.getTopicTieziByIdAndType(id,"1");
        model.addAttribute("commList", commentsList);
        model.addAttribute("topicList", topicList);
        model.addAttribute("totalComm", commentsList.size());
        model.addAttribute("totalTopic", topicList.size());
        model.addAttribute("book", book);
        int tol = 0;
        if (commentsList.size() > 0) {
            for (Comments c : commentsList) {
                tol += c.getStar();
            }
            book.setStar(((float) tol / commentsList.size()));
        } else {
            book.setStar(0);
        }

        //System.out.println(commentsList.toString());
        return "bookitem";
    }

    @RequestMapping("addBookComm")
    @ResponseBody
    public String addBookComm(Model model, Comments comments, HttpSession session) {
        if (null == comments || StringUtils.isEmpty(comments.getContent())) {
            return "必输信息不可为空";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "请先登陆";
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = format.format(new Date(System.currentTimeMillis()));
        comments.setTime(dateStr);
        comments.setType(1);
        comments.setUid(Integer.valueOf((Integer) uid));
        if (mapper.insertComments(comments) > 0) {
            return "发布成功";
        }
        return "发布失败";
    }

    @RequestMapping("addBookWant")
    @ResponseBody
    public String addMovieComm(Model model, int id, HttpSession session) {
        if (StringUtils.isEmpty(id)) {
            return "参数不可为空";
        }
//        Object uid = session.getAttribute("id");
//        if (uid == null) {
//            return "请先登陆";
//        }
        if (mapper.updateBookWantById(id) > 0) {
            return "成功";
        }
        return "失败";
    }

    @RequestMapping(value = "/zanBook")
    public String zanMovie(Model model, int id, @RequestParam(required = false) Integer mid, HttpSession session) {
        if (StringUtils.isEmpty(id)) {
            return "redirect:/index";
        }
//        Object uid = session.getAttribute("id");
//        if (uid == null) {
//            return "redirect:/";
//        }
        mapper.updateCommentsZanById(id);
        if (StringUtils.isEmpty(mid)) {
            return "redirect:/index";
        } else {
            return "redirect:/book?id=" + mid;
        }

    }

    @RequestMapping(value = "/fanduiBook")
    public String fanduiMovie(Model model, int id, @RequestParam(required = false) Integer mid, HttpSession session) {
        if (StringUtils.isEmpty(id)) {
            return "redirect:/index";
        }
//        Object uid = session.getAttribute("id");
//        if (uid == null) {
//            return "redirect:/";
//        }
        mapper.updateCommentsFanduiById(id);
        if (StringUtils.isEmpty(mid)) {
            return "redirect:/index";
        } else {
            return "redirect:/book?id=" + mid;
        }
    }
}
