package com.example.demo.resource;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Tweet;
import com.example.demo.service.TweetService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/tweet")
@RequiredArgsConstructor
@CrossOrigin
@Slf4j
public class TweetResource {
    
    private final TweetService tweetService;

    @GetMapping("/{id}")
    public Tweet getTweetById(@PathVariable Long id){
        log.info(tweetService.getTweetById(id).toString());
        return tweetService.getTweetById(id);
    }

    @GetMapping("/feed")
    public List<Tweet> getFeed(){
        return tweetService.getAllTweets();
    }

    @PostMapping("/post")
    public Tweet postTweet(@RequestBody Tweet tweet){
        return tweetService.addTweet(tweet);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTweet(@PathVariable Long id){
        tweetService.deleteTweetById(id);
    }

    @PostMapping("/response")
    public Tweet postResponse(@RequestBody Response response){
        Tweet tweet = tweetService.getTweetById(response.getId());
        tweet.getComments().add(tweet);
        return tweetService.updateTweet(tweet);
    }
   
    
}
