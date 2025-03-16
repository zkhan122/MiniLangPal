package com.minilangpal.backend.services;

import com.minilangpal.backend.exception.InvalidCredentialsException;
import com.minilangpal.backend.exception.UserNotFoundException;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.UserRepository;
import lombok.Getter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Getter
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean authenticate(String username, String password) {

        // validation of username
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        // validation of password
        if (!passwordEncoder.matches(password, user.getHashedPassword())) {
            throw new InvalidCredentialsException("The password provided is invalid");
        }
        return true;
    }
}
