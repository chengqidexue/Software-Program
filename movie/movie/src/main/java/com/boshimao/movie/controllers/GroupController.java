package com.boshimao.movie.controllers;

import com.boshimao.movie.beans.Group;
import com.boshimao.movie.beans.Post;
import com.boshimao.movie.mappers.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class GroupController {

    @Autowired
    MovieMapper mapper;

    @PostMapping("/addGroup")
    public String addGroup(Group group, Model model, HttpSession session) {
        if (null == group || StringUtils.isEmpty(group.getName()) || StringUtils.isEmpty(group.getDes())) {
            model.addAttribute("msg", "必输信息不可为空");
            return "addgroup";
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = format.format(new Date(System.currentTimeMillis()));
        group.setDatetime(dateStr);
        Object uid = session.getAttribute("id");
        if (null == uid) {
            group.setUid(-1);
        } else {
            group.setUid(Integer.valueOf((Integer) uid));
        }
        if (mapper.insertGroup(group) > 0) {

            model.addAttribute("msg", "添加成功");

        } else {
            model.addAttribute("msg", "添加失败");
        }

        return "addgroup";
    }

    @RequestMapping("publishPost")
    @ResponseBody
    public String publishPost(Post post, Model model, HttpSession session) {
        if (null == post || StringUtils.isEmpty(post.getTitle()) || StringUtils.isEmpty(post.getContent())) {
            return "必输信息不可为空";
            // return "addgroup";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "请先登陆";
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateStr = format.format(new Date(System.currentTimeMillis()));
        post.setDatetime(dateStr);
        post.setUid(Integer.valueOf((Integer) uid));
        if (mapper.insertPost(post) > 0) {
            return "发布成功";
        }
        return "发布失败";

    }


    @RequestMapping(value = "/group")
    public String group(Model model, int id, HttpSession session) {
        Group group = mapper.getGroupById(id);
        List<Post> postList = mapper.getPostListByGroupId(id);
        model.addAttribute("group", group);
        model.addAttribute("postList", postList);
        model.addAttribute("postTotal", String.valueOf(postList.size()));
        String admins = group.getAdmins();
        String members = group.getMembers();
        List<Map<String, String>> adminList = new ArrayList<>();
        List<Map<String, String>> memberList = new ArrayList<>();
        if (!StringUtils.isEmpty(admins)) {
            String[] adminsArr = admins.split(",");
            for (String uid : adminsArr) {
                Map map = new HashMap();
                map.put(uid, mapper.getUserNameById(Integer.valueOf(uid)));
                adminList.add(map);
            }
        }
        if (!StringUtils.isEmpty(members)) {
            String[] membersArr = members.split(",");
            for (String uid : membersArr) {
                //System.out.println(uid);
                Map map = new HashMap();
                map.put(uid, mapper.getUserNameById(Integer.valueOf(uid)));
                memberList.add(map);
            }
        }
        model.addAttribute("adminList", adminList);
        model.addAttribute("memberList", memberList);
        model.addAttribute("total", memberList.size() + 1);
        // System.out.println(adminList.toString());
        // System.out.println(memberList.toString());
        List<String> typeList = new ArrayList<>();
        if (!StringUtils.isEmpty(group.getTypes())) {
            String[] typeArr = group.getTypes().split(",");
            for (String t : typeArr) {
                typeList.add(t);
            }
        }
        model.addAttribute("typeList", typeList);
        return "group";
    }

    @RequestMapping(value = "/addMember")
    @ResponseBody
    public String addGroup(Model model, int id, HttpSession session) {
        if (StringUtils.isEmpty(id)) {
            return "参数不可为空";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "请先登陆";
        }
        Group group = mapper.getGroupById(id);
        String members = group.getMembers();
        if (StringUtils.isEmpty(members)) {
            group.setMembers(String.valueOf(uid));
        } else {
            group.setMembers(members + "," + String.valueOf(uid));
        }
        if (mapper.updateGroupById(group) > 0) {
            return "入组成功";
        }
        return "入组失败";
    }

    @RequestMapping(value = "/addAdmin")
    @ResponseBody
    public String addAdmin(Model model, int id, HttpSession session) {
        if (StringUtils.isEmpty(id)) {
            return "参数不可为空";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "请先登陆";
        }

        Group group = mapper.getGroupById(id);
        String admins = group.getAdmins();
        if (StringUtils.isEmpty(admins)) {
            group.setAdmins(String.valueOf(uid));
        } else {
            group.setAdmins(admins + "," + String.valueOf(uid));
        }
        if (mapper.updateGroupById(group) > 0) {
            return "申请管理员成功";
        }
        return "申请管理员失败";
    }

    @RequestMapping(value = "/addType")
    @ResponseBody
    public String addType(Model model, int id, String type, HttpSession session) {
        if (StringUtils.isEmpty(id) || StringUtils.isEmpty(type)) {
            return "参数不可为空";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "请先登陆";
        }

        Group group = mapper.getGroupById(id);
        String types = group.getTypes();
        if (StringUtils.isEmpty(types)) {
            group.setTypes(type);
        } else {
            group.setTypes(types + "," + type);
        }
        if (mapper.updateGroupById(group) > 0) {
            return "增加标签成功";
        }
        return "增加标签失败";
    }


    @RequestMapping(value = "/zanPost")
    public String addType(Model model, int id, HttpSession session) {
        if (StringUtils.isEmpty(id)) {
            return "redirect:/groups";
        }
        Object uid = session.getAttribute("id");
        if (uid == null) {
            return "redirect:/";
        }
        if (mapper.updatePostZanById(id) > 0) {
            return "redirect:/groups";
        }
        return "redirect:/groups";
    }



}
