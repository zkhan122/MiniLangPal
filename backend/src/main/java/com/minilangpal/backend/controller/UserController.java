package com.minilangpal.backend.controller;

import com.minilangpal.backend.exception.InvalidCredentialsException;
import com.minilangpal.backend.exception.UserNotFoundException;
import com.minilangpal.backend.model.LoginRequest;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.UserRepository;
import com.minilangpal.backend.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("/users")
public class UserController {

    // Injecting User repository
    private final UserRepository userRepository;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserController(UserRepository userRepository, UserService userService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    // posting the data
    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> newUser(@RequestBody User newUser) {
        try {
            // Checking for empty password field
            if (newUser.getPassword() == null || newUser.getPassword().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Password cannot be null or empty");
            }

            // Checking for existing email
            if (userRepository.findByEmail(newUser.getEmail()).isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("An account with this email already exists. Please login instead.");
            }

            // Checking for existing username
            if (userRepository.findByUsername(newUser.getUsername()).isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Username already exists. Please choose another one.");
            }

            String hashedPassword = passwordEncoder.encode(newUser.getPassword());
            newUser.setHashedPassword(hashedPassword); // Set the hashed password
            newUser.setPassword(null);  // Clear the plaintext password field (don't persist it)
            newUser.setRole(); // set the role to be USER

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
//    @Transactional(readOnly = true)
    @PostMapping("/batch")
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

            // Save the batch of=== users and return the response
            List<User> savedUsers = userRepository.saveAll(users);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUsers);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null); // Return internal server error if an exception occurs
        }
    }


    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("{id}")
    User getUserById(@PathVariable("id") String id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @GetMapping("username/{username}")
        // fixing ambiguous handler error (spring can't tell whether to user getUserById or getUserByUsername)
    User getUserByUsername(@PathVariable("username") String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new UserNotFoundException(username));
    }


    @PutMapping(value = "{id}")
    public ResponseEntity<?> updateUser(@RequestBody User newUser, @PathVariable String id) {
        return userRepository.findById(id).map(user -> {

            // Ensure the user has entered a password
            if (newUser.getPassword() == null || newUser.getPassword().isEmpty()) {
                throw new RuntimeException("Password is required to update user details.");
            }

            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            user.setPhone(newUser.getPhone());

            // If the entered password is different, hash and update it
            if (!passwordEncoder.matches(newUser.getPassword(), user.getHashedPassword())) {
                user.setHashedPassword(passwordEncoder.encode(newUser.getPassword()));
            }

            User updatedUser = userRepository.save(user);
            return ResponseEntity.ok(updatedUser);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }


    @DeleteMapping("{id}")
    String deleteUser(@PathVariable String id) {
        Optional<User> userToDelete = userRepository.findById(id);
        if (!userRepository.existsById(id) || userToDelete.isEmpty()) {
            throw new UserNotFoundException(id);
        }
        if (!(userToDelete.get().getUser_id().equals(id))) {
            throw new UserNotFoundException(id);
        }
        // User nextUser = this.getUserById(id+1);
        userRepository.deleteById(id);
        return "SUCCESS: User deleted with id " + id;
    }

    @PostMapping("/login-attempt")
//    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest, HttpSession session) {
        boolean isAuthenticated = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());


        if (isAuthenticated) {

            // User found
            session.setAttribute("user", loginRequest.getUsername()); // Store user in session
            session.setAttribute("role", "USER");
            logger.info("Login successful for user: {}. Stored in session as: '{}', role: '{}'", loginRequest.getUsername(), session.getAttribute("user"), session.getAttribute("role"));
            return ResponseEntity.ok(Map.of("status", "success", "message", "Login successful", "role", "USER"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("status", "error", "message", "Invalid credentials"));
        }
    }
}