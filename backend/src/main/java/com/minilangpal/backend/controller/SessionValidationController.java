package com.minilangpal.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/session/")
public class SessionValidationController {

    private final UserRepository userRepository;

    public SessionValidationController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/validate-session")
    public ResponseEntity<User> validateSession(HttpSession session) {
        // 1. Get the user object from the session
        User user = (User) session.getAttribute("user");

        // 2. Check if a user is in the session and if they exist in the database
        if (user != null && userRepository.findByUsername(user.getUsername()).isPresent()) {
            // The session is valid and the user exists in the DB
            return ResponseEntity.ok(user);
        } else {
            // Either no user in session, or the user from the session is not in the database
            // Invalidate the session to clean up and force re-login
            if (session != null) {
                session.invalidate();
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}