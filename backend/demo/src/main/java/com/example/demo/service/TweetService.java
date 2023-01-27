package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.domain.Tweet;
import com.example.demo.repository.TweetRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TweetService {
    
    private final TweetRepository tweetRepository;

    public List<Tweet> getAllTweets() {
        return tweetRepository.findAll();
    }

    public Tweet addTweet(Tweet tweet) {
        log.info("saving {}",tweet);
        return tweetRepository.save(tweet);
    }

    public void deleteTweetById(Long id) {
        tweetRepository.deleteById(id);
    }

    public Tweet getTweetById(Long id) {
        return tweetRepository.getReferenceById(id);
    }

    public Tweet updateTweet(Tweet tweet) {
        return tweetRepository.save(tweet);
    }

}
