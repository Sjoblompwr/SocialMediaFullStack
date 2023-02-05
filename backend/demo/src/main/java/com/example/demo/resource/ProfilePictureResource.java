package com.example.demo.resource;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;


import com.example.demo.domain.ProfilePicture;
import com.example.demo.service.ProfilePictureService;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.example.demo.repository.ProfilePictureRepository;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/profile-picture")
public class ProfilePictureResource {
    
    private final ProfilePictureService profilePictureService;
    private final ProfilePictureRepository profilePictureRepository;

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        ProfilePicture image = profilePictureService.getPictureById(id);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image.getImageData());
    }
    

    @GetMapping("/all")
    public ResponseEntity<List<ProfilePicture>> getAllProfilePictures() {
        List<ProfilePicture> pictures = profilePictureService.getAllPictures();
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(pictures);
    }
    

    @PostMapping("/save")
    public ProfilePicture saveProfilePicture(ProfilePicture profilePicture) {
        return profilePictureService.save(profilePicture);
    }

}
