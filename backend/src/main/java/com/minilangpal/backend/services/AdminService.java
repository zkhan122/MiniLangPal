package com.minilangpal.backend.services;

import com.minilangpal.backend.exception.InvalidCredentialsException;
import com.minilangpal.backend.exception.UserNotFoundException;
import com.minilangpal.backend.model.Admin;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.AdminRepository;
import lombok.Getter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean findByUsername(String username) {
        if (adminRepository.findByUsername(username).isPresent()) {
            return true;
        } else {
            return false;
        }
    }

    public void createAdmin(Admin admin) {
        String hashedPassword = passwordEncoder.encode(admin.getPassword());
        admin.setPassword(hashedPassword);
        adminRepository.save(admin);
    }

    public boolean authenticate(String username, String password) {
        // validation of username for admin
        Admin adminLoggingIn = adminRepository.findByUsername(username)
                .orElseThrow(() -> new InvalidCredentialsException("User not found"));
        // validation of password
        if (!passwordEncoder.matches(password, adminLoggingIn.getPassword())) {
            throw new InvalidCredentialsException("The password provided is invalid");
        }
        return true;
    }
}

