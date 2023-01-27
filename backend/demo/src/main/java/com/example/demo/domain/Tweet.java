package com.example.demo.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Tweet {

    public Tweet(String message,List<Like> like,List<Tweet> comments,  User user, Boolean commentBoolean) {
        this.message = message;
        this.user = user;
        this.commentBoolean = commentBoolean;
        this.likes = like;   
        this.comments = comments;
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;
    @OneToOne
    @JoinColumn(name="user_id")
    private User user;
    @OneToMany
    @JoinColumn(name="like_id")
    private List<Like> likes;
    @OneToMany
    @JoinColumn(name="tweet_id")
    private List<Tweet> comments;
    private Boolean commentBoolean;

    @Override
    public String toString(){

        return this.id.toString() + " " 
        + this.message + " "
        + this.user.getUsername();
    }
}
