package com.minilangpal.backend.controller;

import com.minilangpal.backend.exception.UserNotFoundException;
import com.minilangpal.backend.model.Admin;
import com.minilangpal.backend.model.LoginRequest;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.AdminRepository;
import com.minilangpal.backend.services.AdminService;
import jakarta.servlet.http.HttpSession;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminRepository adminRepository;
    private final AdminService adminService;
    private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    public AdminController(AdminRepository adminRepository, AdminService adminService) {
        this.adminRepository = adminRepository;
        this.adminService = adminService;
    }

    @GetMapping("/admin")
    @CrossOrigin(origins = "http://localhost:3000")
    List<Admin> getAllUsers() {
        return adminRepository.findAll();
    }

    @GetMapping("/admin/{id}")
    Admin getUserById(@PathVariable("id") Integer id) {
        return adminRepository.findById(String.valueOf(id)).orElseThrow(()->new UserNotFoundException(Long.valueOf(id)));
    }

    @PostMapping("/login-attempt")
//    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest, HttpSession session) {
        boolean isAdminAuthenticated = adminService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());

        boolean loginSuccess = false;

        if (isAdminAuthenticated) {
            // User found
            session.setAttribute("admin", loginRequest.getUsername()); // Store user in session
            session.setAttribute("role", "ADMIN");

            logger.info("Login successful for admin: {}. Stored in session as: '{}', role: '{}'", loginRequest.getUsername(), session.getAttribute("admin"), session.getAttribute("role"));
            return ResponseEntity.ok(Map.of("status",
                    "success",
                    "message",
                    "Login successful",
                    "role",
                    "ADMIN"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("status",
                            "error",
                            "message",
                            "Invalid credentials"));
        }
    }
}