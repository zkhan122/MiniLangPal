package com.minilangpal.backend.controller;

import com.minilangpal.backend.exception.UserNotFoundException;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/users/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            user.setPhone(newUser.getPhone());

            if (newUser.getPassword() != null & !newUser.getPassword().isEmpty()) {
                user.setPassword(newUser.getPassword());
            }
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/users/{id}")
    String deleteUser(@PathVariable Long id) {
        Optional<User> userToDelete = userRepository.findById(id);
        if (!userRepository.existsById(id) || userToDelete.isEmpty())  {
            throw new UserNotFoundException(id);
        }
        if (!(userToDelete.get().getUser_id().equals(id))) {
            throw new UserNotFoundException(id);
        }
        // User nextUser = this.getUserById(id+1);
        userRepository.deleteById(id);

        return "SUCCESS: User deleted with id " + id;
    }
}
