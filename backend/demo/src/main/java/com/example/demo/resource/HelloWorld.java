package com.example.demo.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/hello")
@RestController
public class HelloWorld {
    
    @GetMapping
    public String helloWorld(){
        return "Hello World";
    }
}


//Get request localhost 8080/hello cmd command
//curl -X GET http://localhost:8080/hello