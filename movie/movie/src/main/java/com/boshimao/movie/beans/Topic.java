package com.boshimao.movie.beans;

public class Topic {
    private int id;
    private int uid;
    private String uname;
    private String title;
    private String content;
    private int readCount;
    private String type;
    private int bid;
    private int ccount;

    public int getCcount() {
        return ccount;
    }

    public void setCcount(int ccount) {
        this.ccount = ccount;
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

    public int getReadCount() {
        return readCount;
    }

    public void setReadCount(int readCount) {
        this.readCount = readCount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getBid() {
        return bid;
    }

    public void setBid(int bid) {
        this.bid = bid;
    }

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", uid=" + uid +
                ", uname='" + uname + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", readCount=" + readCount +
                ", type='" + type + '\'' +
                ", bid=" + bid +
                ", ccount=" + ccount +
                '}';
    }
}
