package com.boshimao.movie.beans;

//留言
public class Notes {
    private int id;
    private int uid;
    private String uname;
    private int buid;
    private String content;
    private String datetime;

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
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

    public int getBuid() {
        return buid;
    }

    public void setBuid(int buid) {
        this.buid = buid;
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
