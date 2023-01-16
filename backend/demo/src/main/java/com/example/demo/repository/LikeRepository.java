package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.domain.Like;

public interface LikeRepository extends JpaRepository<Like, Long>{

}
