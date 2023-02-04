package com.example.demo.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;


import org.json.JSONArray;

import com.example.demo.domain.LoginRequest;
import com.example.demo.service.TokenService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginResource {
    
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<String> Login(@RequestBody LoginRequest loginRequest){
        log.info("Trying to login");
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.username(), loginRequest.password()));
        String token = tokenService.generateToken(authentication);
        JSONArray json = new JSONArray();
        json.put(token);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }
    
}
