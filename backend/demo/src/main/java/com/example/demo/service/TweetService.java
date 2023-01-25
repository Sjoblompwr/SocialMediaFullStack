package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Tweet;
import com.example.demo.repository.TweetRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TweetService {
    
    private final TweetRepository tweetRepository;

    public List<Tweet> getAllTweets() {
        Long temp = 1L;
        return tweetRepository.findByUserId(temp); 
    }

    public Tweet addTweet(Tweet tweet) {
        return tweetRepository.save(tweet);
    }

    public void deleteTweetById(Long id) {
        tweetRepository.deleteById(id);
    }

}
