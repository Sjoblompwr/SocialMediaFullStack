package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.domain.Tweet;

public interface TweetRepository extends JpaRepository<Tweet, Long>{
    public Tweet[] findAllTweets();
    
    public Tweet addTweet(Tweet tweet);

    public Tweet deleteTweetById(Long id);
}
