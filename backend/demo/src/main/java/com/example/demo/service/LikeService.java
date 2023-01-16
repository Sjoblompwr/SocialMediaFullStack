package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.repository.LikeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LikeService {
    LikeRepository likeRepository;
}
