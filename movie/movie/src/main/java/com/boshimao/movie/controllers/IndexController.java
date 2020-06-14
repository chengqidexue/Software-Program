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
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class IndexController {

    @Autowired
    MovieMapper mapper;

    @RequestMapping(value = "/feedback")
    public String feedback(Model model) {
        return "feedback";
    }

    @RequestMapping(value = "/addFeedback")
    @ResponseBody
    public String addFeedback(Feedback feedback, HttpSession session) {
        if (null == feedback) {
            return "请输入您的意见";
        }
        if (StringUtils.isEmpty(feedback.getContent())) {
            return "请输入您的意见";
        }
        Object uid = session.getAttribute("name");
        if (null == uid) {
            feedback.setUserid(-1);
        } else {
            feedback.setUserid(Integer.valueOf((Integer) uid));
        }
        if (mapper.insertFeedBack(feedback) > 0) {
            return "感谢您的提交";
        }
        return "提交失败";
    }


    @RequestMapping(value = "/addGroup")
    public String addGroup(Model model, HttpSession session) {
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "redirect:/";
        }
        return "addgroup";
    }

    @RequestMapping(value = "/groups")
    public String groups(Model model, HttpSession session) {
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "redirect:/";
        }
        List<Group> groupList0 = mapper.getGroupList();
        List<Group> groupList1 = new ArrayList<>();
        for (Group g : groupList0) {
            if (StringUtils.isEmpty(g.getMembers())) {
                g.setTotal("1");
            } else {
                g.setTotal(String.valueOf(g.getMembers().split(",").length + 1));
            }
            groupList1.add(g);
        }
        List<Post> postList = mapper.getPostList();

        model.addAttribute("list", groupList1);
        model.addAttribute("postList", postList);
        //System.out.println(postList);
        return "groups";
    }

    @RequestMapping(value = "/home")
    public String home(Model model) {
        return "home";
    }

    @RequestMapping(value = "/books")
    public String book(Model model) {
        List<Book> bookList = mapper.getBookList();
        model.addAttribute("list", bookList);
        for (Book mv : bookList) {
            List<Comments> commentsList = mapper.getCommentsByIdAndType(mv.getId(), 1);
            int tol = 0;
            if (commentsList.size() > 0) {
                for (Comments c : commentsList) {
                    tol += c.getStar();
                }
                mv.setStar(((float) tol / commentsList.size()));
            } else {
                mv.setStar(0);
            }
        }
        return "books";
    }

    @RequestMapping(value = "/movies")
    public String movie(Model model) {

        List<Movie> movieList = mapper.getMovieList();
        model.addAttribute("list", movieList);
        for (Movie mv : movieList) {
            List<Comments> commentsList = mapper.getCommentsByIdAndType(mv.getId(), 0);
            int tol = 0;
            if (commentsList.size() > 0) {
                for (Comments c : commentsList) {
                    tol += c.getStar();
                }
                mv.setStar(((float) tol / commentsList.size()));
            } else {
                mv.setStar(0);
            }
        }
        return "movies";
    }

    @RequestMapping(value = "/notice")
    public String notice(Model model) {
        List<Notice> list = mapper.getNoticeList();
        model.addAttribute("list", list);
        return "notice";

    }

    @RequestMapping(value = "/post")
    public String post(Model model) {
        return "post";
    }

    @RequestMapping(value = "/tiezi")
    public String tiezi(Model model) {
        return "tiezi";
    }

    @RequestMapping(value = "/user")
    public String user(Model model, HttpSession session, Integer id) {
        Object uid = null;
        if (StringUtils.isEmpty(id)) {
            uid = session.getAttribute("id");
        } else {
            uid = id;
        }
        if (null == uid) {
            return "redirect:/";
        }
        String name = mapper.getUserNameById((Integer) uid);
        model.addAttribute("name", name);
        model.addAttribute("uid", (Integer) uid);
        int commentsCount = mapper.getUserCommentsCount((Integer) uid);
        model.addAttribute("commentsCount", commentsCount);
        List<Group> allGroup = mapper.getGroupList();
        int totalMember = 0;
        for (Group group : allGroup) {
            if (!StringUtils.isEmpty(group.getMembers())) {
                for (String idd : group.getMembers().split(",")) {
                    if (idd.equals(String.valueOf(uid))) {
                        totalMember++;
                    }
                }
            }
        }
        model.addAttribute("totalMember", totalMember);
        List<Notes> notesList = mapper.getNotesById((Integer) uid);
        model.addAttribute("notesList", notesList);
        return "user";
    }


    @RequestMapping(value = "/topic")
    public String topic(Model model, @RequestParam(required = false) String type) {
        List<Topic> topicList = mapper.getTopicList(type);
        model.addAttribute("topicList", topicList);
        for (Topic topic : topicList) {
            int ccount = mapper.getTieziListByTopicId(topic.getId()).size();
            topic.setCcount(ccount);
        }
        return "topic";
    }

    @RequestMapping("search")
    public String search(String search, String type, Model model, HttpSession session) {
        switch (type) {
            case "1":
                List<Book> bookList = mapper.searchBookList(search);
                model.addAttribute("list", bookList);
                for (Book mv : bookList) {
                    List<Comments> commentsList = mapper.getCommentsByIdAndType(mv.getId(), 1);
                    int tol = 0;
                    if (commentsList.size() > 0) {
                        for (Comments c : commentsList) {
                            tol += c.getStar();
                        }
                        mv.setStar(((float) tol / commentsList.size()));
                    } else {
                        mv.setStar(0);
                    }
                }
                return "books";
            case "2":
                List<Movie> movieList = mapper.searchMovieList(search);
                model.addAttribute("list", movieList);
                for (Movie mv : movieList) {
                    List<Comments> commentsList = mapper.getCommentsByIdAndType(mv.getId(), 0);
                    int tol = 0;
                    if (commentsList.size() > 0) {
                        for (Comments c : commentsList) {
                            tol += c.getStar();
                        }
                        mv.setStar(((float) tol / commentsList.size()));
                    } else {
                        mv.setStar(0);
                    }
                }
                return "movies";
            case "3":
                List<Topic> topicList = mapper.searchTopicList(search);
                model.addAttribute("topicList", topicList);
                return "topic";
            case "4":
                Object uid = session.getAttribute("id");
                if (uid == null) {
                    return "redirect:/";
                }
                List<Group> groupList0 = mapper.getGroupList();
                List<Group> groupList1 = new ArrayList<>();
                for (Group g : groupList0) {
                    if (StringUtils.isEmpty(g.getMembers())) {
                        g.setTotal("1");
                    } else {
                        g.setTotal(String.valueOf(g.getMembers().split(",").length + 1));
                    }
                    groupList1.add(g);
                }
                List<Post> postList = mapper.searchPostList(search);
                model.addAttribute("list", groupList1);
                model.addAttribute("postList", postList);
                return "groups";
            default:
                return "redirect:/index";
        }

    }
}
