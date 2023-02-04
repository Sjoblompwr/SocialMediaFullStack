package com.example.demo.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.domain.User;

public interface UserRepository extends JpaRepository<User, Long>{

    public User findUserById(Long id);

    public   Optional<User>  findUserByEmail(String email);
    
}
