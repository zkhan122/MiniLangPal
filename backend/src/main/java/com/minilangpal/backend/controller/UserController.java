package com.minilangpal.backend.controller;

import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    // Injecting User repository
    @Autowired
    private UserRepository userRepository;

    // posting the data
    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    // for creating multiple users
    @PostMapping("/users/batch")
    List<User> createUser(@RequestBody List<User> users) {
        return userRepository.saveAll(users);
    }

    // getting the data
    @GetMapping("/users")
    ResponseEntity<List<User>> getAllUsers() {
        List<User> usersRetrieved =  userRepository.findAll();
        return ResponseEntity.ok(usersRetrieved);
    }
}
