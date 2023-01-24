package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.domain.Tweet;
import com.example.demo.repository.TweetRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TweetService {
    private final TweetRepository tweetRepository;


    public Tweet[] getAllTweets() {
        return tweetRepository.findAllTweets();
    }

    public Tweet addTweet(Tweet tweet) {
        return tweetRepository.addTweet(tweet);
    }

    public Tweet deleteTweetById(Long id) {
        return tweetRepository.deleteTweetById(id);
    }

}
