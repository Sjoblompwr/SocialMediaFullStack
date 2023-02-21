package com.example.demo;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.type.descriptor.java.LongJavaType;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.domain.User;
import com.example.demo.domain.ProfilePicture;
import com.example.demo.domain.Tweet;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.RsaKeyProperties;

import lombok.extern.slf4j.Slf4j;

import com.example.demo.repository.ProfilePictureRepository;
import com.example.demo.repository.TweetRepository;

@SpringBootApplication
@Slf4j
@EnableConfigurationProperties(RsaKeyProperties.class)
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository, TweetRepository tweetRepository, ProfilePictureRepository profilePictureRepository) {
		return args -> {

			byte[] imageData;
			String[] picName = { "BlackWoman", "ClarkKent", "Duche", "Frank","SwedishSurfer","Frank"};
			for (int i = 0; i < picName.length; i++) {
				try {
				Path path = Paths.get("backend/demo/src/main/resources/pictures/"+picName[i] +".jpg");
				imageData = Files.readAllBytes(path);
				ProfilePicture profilePicture = new ProfilePicture(imageData);
				profilePictureRepository.save(profilePicture);
				} catch (IOException e) {
				e.printStackTrace();
				}
			}


			String[] names = { "David", "Emily", "John", "Jessica", "Michael", "Amy" };
			String[] emails = { "davidsjoblom@hotmail.se", "emily123@gmail.com", "john.doe@gmail.com",
					"jessica.brown@hotmail.com", "michael.jackson@gmail.com", "amy.lee@hotmail.com" };
			List<User> users = new ArrayList<>();
			for (int i = 0; i < names.length; i++) {
				User user = new User(names[i], emails[i], this.bCryptPasswordEncoder().encode("123"), profilePictureRepository.getReferenceById((long)i +1), null);
				users.add(user);
				userRepository.save(user);

			}
			for (User user : users) {
				List<User> friends = new ArrayList<>(users);
				friends.remove(user);
				try {
					user.setFriends(friends);
					userRepository.save(user);
				} catch (Exception e) {
					System.out.println(e);
				}
			}
			List<Tweet> tweets = new ArrayList<>();

			String[] messages = {
				"Just had an amazing cup of coffee this morning! #CoffeeLover",
				"Can't believe it's already February! Time flies so fast. #MonthlyReflection",
				"Going for a run in the park this morning. Fresh air and exercise is the way to start the day. #HealthyLifestyle",
				"Binge-watching my favorite show on Netflix all weekend. Who's with me? #NetflixAndChill",
				"Excited to announce that I will be starting a new job next week! Hard work pays off. #CareerGoals",
				"Cooking up a storm in the kitchen today! Trying a new recipe, wish me luck. #Foodie",
				"Spending the day with family and friends. Life is good. #Blessed",
				"Reading a book in the park. Nothing beats a good book and sunshine. #BookLover",
				"Started a new hobby this weekend. Excited to see where it takes me. #NeverTooLate",
				"Just finished a yoga class. Feeling relaxed and refreshed. #Namaste",
				"Visited a new city this weekend. So much culture and history to explore. #Traveler"
			};
			
			for (int i = 0; i < names.length; i++) {
				User user = users.get(i);
				Tweet tweet1 = new Tweet(messages[i], new ArrayList<>(), new ArrayList<>(), user, false);
				tweets.add(tweet1);
			
				int j = i + names.length;
				if (j < messages.length) {
					Tweet tweet2 = new Tweet(messages[j], new ArrayList<>(), new ArrayList<>(), user, false);
					tweets.add(tweet2);
				}
			}
			
			
			
			tweetRepository.saveAll(tweets);
		};
	}

}
