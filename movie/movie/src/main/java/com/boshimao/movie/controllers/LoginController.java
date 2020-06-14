package com.boshimao.movie.controllers;

import com.boshimao.movie.beans.*;
import com.boshimao.movie.mappers.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    MovieMapper mapper;

    @RequestMapping(value = "/")
    public String index(HttpSession session) {
        Object uid = session.getAttribute("id");
        if (null != uid) {
            return "redirect:/index";
        }
        return "register";
    }

    @RequestMapping(value = "/register")
    @ResponseBody
    public String register(User user) {
        if (null == user) {
            return "用户名密码不可为空";
        }
        if (StringUtils.isEmpty(user.getName()) || StringUtils.isEmpty(user.getPassword())) {
            return "用户名或密码不可为空";
        }
        if (mapper.register(user) > 0) {
            return "注册成功" + user.getName();
        } else {
            return "注册失败";
        }
    }

    @RequestMapping(value = "/login")
    public String login(User user, Map<String, Object> map, HttpSession session) {
        if (null == user) {
            map.put("msg", "用户名密码不可为空");
            return "/register";
        }
        if (StringUtils.isEmpty(user.getName()) || StringUtils.isEmpty(user.getPassword())) {
            map.put("msg", "用户名或密码不可为空");
            return "/register";
        }
        List<User> list = mapper.login(user);
        if (list.size() > 0) {
            session.setAttribute("id", list.get(0).getId());
            session.setAttribute("name", list.get(0).getName());
            return "redirect:/index";
        }
        map.put("msg", "用户名密码错误");
        return "/register";
    }

    @RequestMapping(value = "/index")
    public String index(Model model) {
        List<Movie> movieList = mapper.getTopMovieList();
        List<Book> bookList = mapper.getTopBookList();
        model.addAttribute("movieList", movieList);
        model.addAttribute("bookList", bookList);
        List<Comments> movieCommentsList = mapper.getTopMovieCommentsList();
        List<Comments> bookCommentsList = mapper.getTopBookCommentsList();
        model.addAttribute("movieCommentsList", movieCommentsList);
        model.addAttribute("bookCommentsList", bookCommentsList);
        List<Topic> topicList = mapper.getTopTopicList();
        model.addAttribute("topicList", topicList);
        return "shouye";
    }

    @RequestMapping(value = "/quit")
    public String quit(HttpSession session) {
        Object uid = session.getAttribute("id");
        if (null != uid) {
            session.invalidate();
        }
        return "redirect:/";
    }
}
