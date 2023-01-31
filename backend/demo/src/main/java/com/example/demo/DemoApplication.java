package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Bean
	CommandLineRunner init(UserRepository userRepository){
		return args ->{
			
			String[] names = {"David", "Emily", "John", "Jessica", "Michael", "Amy"};
String[] emails = {"davidsjoblom@hotmail.se", "emily123@gmail.com", "john.doe@gmail.com", "jessica.brown@hotmail.com", "michael.jackson@gmail.com", "amy.lee@hotmail.com"};
List<User> users = new ArrayList<>();
for (int i = 0; i < names.length; i++) {
    User user = new User(names[i], emails[i], null, null, null);
 users.add(user);
    userRepository.save(user);
	
}
for (User user : users) {
    List<User> friends = new ArrayList<>(users);
    friends.remove(user);
	try{
    user.setFriends( friends);
    userRepository.save(user);
	}catch(Exception e){
		System.out.println(e);
	}	
}
		};
	}

}
