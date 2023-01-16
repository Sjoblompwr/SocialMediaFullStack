package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.domain.Tweet;

public interface TweetRepository extends JpaRepository<Tweet, Long>{
    
}
