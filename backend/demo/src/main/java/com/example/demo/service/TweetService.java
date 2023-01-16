package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.repository.TweetRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TweetService {
    TweetRepository tweetRepository;
}
