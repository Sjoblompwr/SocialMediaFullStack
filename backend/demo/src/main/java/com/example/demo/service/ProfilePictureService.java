package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.repository.ProfilePictureRepository;
import com.example.demo.domain.ProfilePicture;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProfilePictureService {

    private final ProfilePictureRepository profilePictureRepository;

    public ProfilePicture getPictureById(Long id) {
        return profilePictureRepository.getReferenceById(id);
    }

    public ProfilePicture save(ProfilePicture profilePicture) {
        return profilePictureRepository.save(profilePicture);
    }

    public List<ProfilePicture> getAllPictures() {
        return profilePictureRepository.findAll();
    }
    
}
