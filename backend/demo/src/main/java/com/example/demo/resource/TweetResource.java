package com.example.demo.resource;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Tweet;
import com.example.demo.service.TweetService;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
public class TweetResource {
    
    private final TweetService tweetService;


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
   
    
}
