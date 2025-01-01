package com.minilangpal.backend.controller;

import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") // react frontend server running on port 3000
public class UserController {

    // Injecting User repository
    @Autowired
    private UserRepository userRepository;

    // posting the data
    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        System.out.println("Received user: " + newUser);
        User savedUser =  userRepository.save(newUser);
        System.out.println("Saved user: " + savedUser);

//        System.out.println("Saved user data:");
//        System.out.println("Name: " + savedUser.getName());
//        System.out.println("Email: " + savedUser.getEmail());
//        System.out.println("Username: " + savedUser.getUsername());
        return savedUser;
    }

    // for creating multiple users
    @PostMapping("/users/batch")
    List<User> createUser(@RequestBody List<User> users) {
        return userRepository.saveAll(users);
    }

    // getting the data
    /* (TO FIX)
    either:
    1) THIS MIGHT ONLY WORK FOR 1 USER AND NOT POST OF BATCH OF USERS -> tested, not working
    2) This GET request only works for users from post at /users and not /users/batch
     */
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
