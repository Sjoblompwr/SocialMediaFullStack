package com.example.demo.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class User {

    public User(String email, String password, String profilePicLink, User[] friends) {
        this.email = email;
        this.password = password;
        this.profilePicLink = profilePicLink;
        this.friends = friends;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String profilePicLink;
    @OneToMany(fetch = FetchType.EAGER)
    private User[] friends;
}
