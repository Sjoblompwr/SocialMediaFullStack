package com.example.demo.repository;


import com.example.demo.domain.ProfilePicture;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ProfilePictureRepository extends JpaRepository<ProfilePicture, Long> {
    
}
