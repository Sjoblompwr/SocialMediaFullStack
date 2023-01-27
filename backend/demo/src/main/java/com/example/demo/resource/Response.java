package com.example.demo.resource;

import com.example.demo.domain.Tweet;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Response {

    private Long id;
    private Tweet tweet;
}
