package com.boshimao.movie.mappers;

import com.boshimao.movie.beans.*;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface MovieMapper {

    @Insert("insert into user(name,password) values(#{name},#{password})")
    int register(User user);

    @Select("select * from user where name=#{name} and password=#{password}")
    List<User> login(User user);

    @Select("select * from notice")
    List<Notice> getNoticeList();

    @Insert("insert into feedback(userid,content) values(#{userid},#{content})")
    int insertFeedBack(Feedback feedback);

    @Insert("insert into `group`(name,des,uid,datetime) values(#{name},#{des},#{uid},#{datetime})")
    int insertGroup(Group group);

    @Insert("insert into post(uid,gid,title,content,datetime) values(#{uid},#{gid},#{title},#{content},#{datetime})")
    int insertPost(Post post);

    @Insert("insert into topic(id,title,content,type,bid,uid) values(#{id},#{title},#{content},#{type},#{bid},#{uid})")
    int insertTopic(Topic topic);

    @Select("select post.*,user.name uname from post,user where gid=#{gid} and post.uid=user.id")
    List<Post> getPostListByGroupId(int gid);

    @Select("select *,`user`.name as uname from `group`,user where `group`.uid=user.id order by active DESC limit 0,2")
    List<Group> getGroupList();

    @Select("select *,`user`.name as uname from `group`,user where `group`.uid=user.id and `group`.id=#{id}")
    Group getGroupById(int id);

    @Update("update `group` set members=#{members},admins=#{admins},types=#{types} where id=#{id}")
    int updateGroupById(Group group);

    @Update("update post set zan=zan+1 where id=#{id}")
    int updatePostZanById(int id);

    @Select("select name from user where id=#{id}")
    String getUserNameById(int id);

    @Select("select post.*,user.name uname,`group`.name as gname from post,user,`group` where post.uid=user.id and `group`.id=post.gid")
    List<Post> getPostList();

    @Select("select * from movie")
    List<Movie> getMovieList();

    @Select("select * from book")
    List<Book> getBookList();

    @Select("select * from movie order by want desc limit 5")
    List<Movie> getTopMovieList();

    @Select("select * from topic order by readCount desc limit 5")
    List<Topic> getTopTopicList();

    @Select("select * from book order by want desc limit 5")
    List<Book> getTopBookList();

    @Select("select comments.*,user.name as uname,movie.name as bname  from comments,user,movie where user.id=comments.uid and comments.type=0 and movie.id=comments.bid order by zan desc limit 5")
    List<Comments> getTopMovieCommentsList();

    @Select("select comments.*,user.name as uname,book.name as bname  from comments,user,book where user.id=comments.uid and comments.type=1 and book.id=comments.bid order by zan desc limit 5")
    List<Comments> getTopBookCommentsList();

    @Select("select * from movie where id=#{id}")
    Movie getMovieById(int id);

    @Select("select * from book where id=#{id}")
    Book getBookById(int id);

    @Insert("insert into comments(uid,bid,type,content,time,star) values(#{uid},#{bid},#{type},#{content},#{time},#{star})")
    int insertComments(Comments comments);

    @Insert("insert into tiezi(uid,tid,content,time) values(#{uid},#{tid},#{content},#{time})")
    int insertTiezi(Tiezi tiezi);


    @Select("select *,user.name as uname from comments,user where bid=#{bid} and type=#{type} and user.id=comments.uid")
    List<Comments> getCommentsByIdAndType(@Param("bid") int bid, @Param("type") int type);

    @Select("select tiezi.*,user.name as uname,tiezi.time,topic.title,topic.type from topic,user,tiezi where bid=#{bid} and type=#{type} and user.id=tiezi.uid and topic.id=tiezi.tid")
    List<Tiezi> getTopicTieziByIdAndType(@Param("bid") int bid, @Param("type") String type);


    @Update("update movie set want=want+1 where id=#{id}")
    int updateMovieWantById(int id);

    @Update("update book set want=want+1 where id=#{id}")
    int updateBookWantById(int id);

    @Update("update topic set readCount=readCount+1 where id=#{id}")
    int updateTopicReadCountById(int id);

    @Update("update comments set zan=zan+1 where id=#{id}")
    int updateCommentsZanById(int id);

    @Update("update comments set fandui=fandui+1 where id=#{id}")
    int updateCommentsFanduiById(int id);

    @Update("update tiezi set zan=zan+1 where id=#{id}")
    int updateTieziZanById(int id);

    @Update("update tiezi set fandui=fandui+1 where id=#{id}")
    int updateTieziFanduiById(int id);


    @Select("select count(*) from comments where uid=#{id}")
    int getUserCommentsCount(int id);


    @Insert("insert into notes(uid,buid,content,datetime) values(#{uid},#{buid},#{content},#{datetime})")
    int insertNotes(Notes notes);

    @Select("select *,user.name as uname from notes,user where buid=#{id} and user.id=notes.uid")
    List<Notes> getNotesById(int id);

    @Select("<script>" +
            "select * from topic " +
            "<where>" +
            "<if test=\"null != type and '' != type\">" +
            "and type=#{type}" +
            "</if>" +
            "</where>" +
            "</script>"
    )
    List<Topic> getTopicList(String type);

    @Select("select *,user.name as uname from topic,user where topic.id=#{id} and user.id=topic.uid")
    Topic getTopicById(int id);

    @Select("select tiezi.*,user.name as uname from tiezi,user where tid=#{id} and user.id=tiezi.uid")
    List<Tiezi> getTieziListByTopicId(int id);

    @Select("select *  from tiezi where uid=#{id}")
    List<Tiezi> getTieziListByUserId(int id);


    //search
    @Select("select * from movie where name like concat('%',#{search},'%') or des like concat('%',#{search},'%')")
    List<Movie> searchMovieList(String search);

    @Select("select * from book where name like concat('%',#{search},'%') or des like concat('%',#{search},'%')")
    List<Book> searchBookList(String search);

//    @Select("select * from `group` where name like concat('%',#{search},'%') or des like concat('%',#{search},'%')")
//    List<Group> searchGroupList(String search);

    @Select("select post.*,user.name uname,`group`.name as gname from post,user,`group` where `group`.id= post.gid and user.id=post.uid and(`group`.name like concat('%',#{search},'%') or content like concat('%',#{search},'%') or title like concat('%',#{search},'%'))")
    List<Post> searchPostList(String search);

    @Select("select * from topic where title like concat('%',#{search},'%') or content like concat('%',#{search},'%')")
    List<Topic> searchTopicList(String search);

}
