package com.example.demo.resource;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Tweet;
import com.example.demo.service.TweetService;
import com.example.demo.service.UserService;

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
    private final UserService userService;

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
        log.info( "response id: " + response.getResponeToId().toString());
        Tweet tweet = tweetService.getTweetById(response.getResponeToId());
        Tweet newTweet = new Tweet();
        newTweet.setCommentBoolean(true);
        //User should be set to the user who is logged in but for now hardcoded
        newTweet.setUser(userService.getUserById(1L));
        newTweet.setMessage(response.getMessage());
        List<Tweet> tweets = tweet.getComments();
        tweetService.updateTweet(newTweet);
        tweets.add(newTweet);
        tweet.setComments(tweets);
        return tweetService.updateTweet(tweet);
     // return null;
    }
   
    
}
