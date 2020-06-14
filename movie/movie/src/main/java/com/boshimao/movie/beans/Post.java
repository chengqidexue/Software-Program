package com.boshimao.movie.beans;

public class Post {
    private int id;
    private int uid;
    private int gid;
    private String gname;
    private String uname;
    private String title;
    private String content;
    private String datetime;
    private int zan;

    public int getZan() {
        return zan;
    }

    public void setZan(int zan) {
        this.zan = zan;
    }

    public int getGid() {
        return gid;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", uid=" + uid +
                ", gid=" + gid +
                ", uname='" + uname + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", datetime='" + datetime + '\'' +
                '}';
    }

    public void setGid(int gid) {
        this.gid = gid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }
}
