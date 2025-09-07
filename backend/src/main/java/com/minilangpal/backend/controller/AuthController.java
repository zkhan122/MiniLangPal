package com.minilangpal.backend.controller;

import com.minilangpal.backend.model.PasswordResetToken;
import com.minilangpal.backend.repository.PasswordResetTokenRepository;
import com.minilangpal.backend.repository.UserRepository;
import com.minilangpal.backend.services.PasswordResetService;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import org.aspectj.apache.bcel.classfile.ExceptionTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import com.minilangpal.backend.model.User;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private UserRepository userRepo;
    @Autowired private PasswordResetService resetService;
    @Autowired private PasswordResetTokenRepository tokenRepo;
    @Autowired private PasswordEncoder passwordEncoder;

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) throws MessagingException {
        try {
            String email = request.get("email");

            if (email == null || email.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of(
                        "message", "Please enter your email address."
                ));
            }

            Optional<User> userOpt = userRepo.findByEmail(email);
            if (userOpt.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of(
                        "message", "We couldn't find an account with that email address."
                ));
            }

            String token = resetService.createToken(userOpt.get());
            resetService.sendResetEmail(email, token);

            return ResponseEntity.ok(Map.of("message", "Password reset link sent!"));
        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                    "status", 500,
                    "message", "Oops! Something went wrong on our end. Please try again later."
            ));
        }
    }

    @PostMapping("/reset-password/{token}")
    public ResponseEntity<?> resetPassword(
            @PathVariable String token,
            @RequestBody Map<String, String> request
    ) {
        PasswordResetToken prt = tokenRepo.findByToken(token);
        if (prt == null || prt.getExpiration().isBefore(LocalDateTime.now())) {
            return ResponseEntity.badRequest().body("Invalid or expired token.");
        }

        User user = prt.getUser();

        String newPassword = request.get("password");

        if (passwordEncoder.matches(newPassword, user.getHashedPassword())) {
            return ResponseEntity.badRequest().body(Map.of(
                    "message", "New password cannot be the same as the old password."
            ));
        }

        user.setHashedPassword(passwordEncoder.encode(request.get("password")));

        userRepo.save(user);

        tokenRepo.delete(prt);

        return ResponseEntity.ok(Map.of("message", "Password successfully reset"));
    }

    @GetMapping("/current-session-id")
    public ResponseEntity<String> getCurrentSessionId(HttpSession session) {
        if (session != null && session.getId() != null) {
            return ResponseEntity.ok(session.getId());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No active session");
        }
    }
}
