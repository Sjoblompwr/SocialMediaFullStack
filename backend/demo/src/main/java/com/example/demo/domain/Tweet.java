package com.example.demo.domain;

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
public class Tweet {

    public Tweet(String message, User user, Boolean commentBoolean) {
        this.message = message;
        this.user = user;
        this.commentBoolean = commentBoolean;
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
    private Like[] likes;
    @OneToMany
    @JoinColumn(name="tweet_id")
    private Tweet[] comments;
    private Boolean commentBoolean;
}
