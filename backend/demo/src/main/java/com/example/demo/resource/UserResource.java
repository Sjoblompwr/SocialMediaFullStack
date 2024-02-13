package com.example.demo.resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.User;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("user")
@AllArgsConstructor
@Slf4j
public class UserResource {

    UserService userService;
        
    @GetMapping
    public User getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        log.info("UserResource.getUser() auth.getName() = " + auth.getName());
        return this.userService.getUserByEmail(auth.getName());
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return this.userService.getUserById(id);
    }

    
}
