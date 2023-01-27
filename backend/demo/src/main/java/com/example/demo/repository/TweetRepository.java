package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.domain.Tweet;

public interface TweetRepository extends JpaRepository<Tweet, Long>{

    public List<Tweet> findByUserId(Long id);

}
