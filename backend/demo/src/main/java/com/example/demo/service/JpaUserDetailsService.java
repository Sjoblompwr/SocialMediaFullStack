package com.example.demo.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.domain.SecurityUser;
import com.example.demo.repository.UserRepository;


@Service
@Slf4j
public class JpaUserDetailsService implements UserDetailsService  {
    private final UserRepository userRepository;

    /**
     * Instantiates a new Jpa user details service.
     *
     * @param userRepository the user repository
     */
    public JpaUserDetailsService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    /**
     * Load user by username user details.
     *
     * @param email the email
     * @return the user details
     * @throws UsernameNotFoundException the username not found exception
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        log.info("loadUserByUsername " + email + " is logging in.");
        return userRepository
                .findUserByEmail(email)
                .map(SecurityUser::new)
                .orElseThrow(()->new UsernameNotFoundException("User not found " + email));
    }
}
