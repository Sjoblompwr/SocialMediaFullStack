package com.example.demo.resource;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.TokenService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginResource {
    
    private final TokenService tokenService;

    @PostMapping("/login")
    public String Login(Authentication authentication){
        log.info("Login request for user: {}", authentication.getName());
        log.info("Generatiing token for user: {}", authentication.getName());
        return tokenService.generateToken(authentication);
    }
}
