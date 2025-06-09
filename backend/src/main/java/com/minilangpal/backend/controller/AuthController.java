package com.minilangpal.backend.controller;

import com.minilangpal.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/authenticated_user")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
}