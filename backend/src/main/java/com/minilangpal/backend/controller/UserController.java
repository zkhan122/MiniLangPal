package com.minilangpal.backend.controller;

import com.minilangpal.backend.exception.InvalidCredentialsException;
import com.minilangpal.backend.exception.UserNotFoundException;
import com.minilangpal.backend.model.LoginRequest;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.UserRepository;
import com.minilangpal.backend.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000") // react frontend server running on port 3000
public class UserController {

    // Injecting User repository
    private final UserRepository userRepository;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserRepository userRepository, UserService userService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    // posting the data
    @PostMapping("/users")
    public ResponseEntity<?> newUser(@RequestBody User newUser) {
        try {
            if (newUser.getPassword() == null || newUser.getPassword().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Password cannot be null or empty");
            }

            String hashedPassword = passwordEncoder.encode(newUser.getPassword());
            newUser.setHashedPassword(hashedPassword); // Set the hashed password
            newUser.setPassword(null);  // Clear the plaintext password field (don't persist it)

            //newUser.setPassword(null);  // (Needs revising) Clear the plaintext password field (don't persist it)
            // Save the user and return the response
            User savedUser = userRepository.save(newUser);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while creating the user");
        }
    }



    // for creating multiple users
    @PostMapping("/users/batch")
    public ResponseEntity<List<User>> createUser(@RequestBody List<User> users) {
        try {
            // Iterate through each user and hash their password
            for (User user : users) {
                if (user.getPassword() == null || user.getPassword().isEmpty()) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body(null); // Return bad request if any user has a null or empty password
                }

                // Hash the password for each user
                String hashedPassword = passwordEncoder.encode(user.getPassword());
                user.setHashedPassword(hashedPassword); // Set the hashed password
                user.setPassword(null);  // Clear the plaintext password field (don't persist it)
            }

            // Save the batch of users and return the response
            List<User> savedUsers = userRepository.saveAll(users);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUsers);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null); // Return internal server error if an exception occurs
        }
    }


    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/id/{id}")
    User getUserById(@PathVariable("id") String id) {
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    @GetMapping("/users/username/{username}") // fixing ambiguous handler error (spring can't tell whether to user getUserById or getUserByUsername)
    User getUserByUsername(@PathVariable("username") String username) {
        return userRepository.findByUsername(username).orElseThrow(()->new UserNotFoundException(username));
    }


    @PutMapping(value = "/users/id/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable String id) {
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
    String deleteUser(@PathVariable String id) {
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest, HttpSession session) {
        try {
            boolean isAuthenticated = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());

            if (isAuthenticated) {
                // user found
                session.setAttribute("user", loginRequest.getUsername()); // we can display session details in header or user profile
                return ResponseEntity.ok("Login was successful"); // status code 200
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unknown error occurred");
        }
    }
}
