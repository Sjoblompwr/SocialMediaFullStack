package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Like;
import com.example.demo.repository.LikeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LikeService {
    @Autowired
    private final LikeRepository likeRepository;
    
    public Optional<Like> getLike(Long id) {
        return likeRepository.findById(id);
    }
}
