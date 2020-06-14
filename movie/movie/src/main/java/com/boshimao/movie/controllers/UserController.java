package com.boshimao.movie.controllers;

import com.boshimao.movie.beans.Notes;
import com.boshimao.movie.mappers.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.text.SimpleDateFormat;

@Controller
public class UserController {

    @Autowired
    MovieMapper mapper;

    @RequestMapping("/addNotes")
    @ResponseBody
    public String addNotes(Notes notes, HttpSession session) {
        Object uid = session.getAttribute("id");
        if (null == uid) {
            return "请先登陆";
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = format.format(new Date(System.currentTimeMillis()));
        notes.setDatetime(dateStr);
        notes.setUid(Integer.valueOf((Integer) uid));
        if (mapper.insertNotes(notes) > 0) {
            return "成功";
        }
        return "失败";

    }


}
