package com.minilangpal.backend.configuration;

import com.minilangpal.backend.services.AdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminInitializerConfig {

    @Bean
    public boolean initializeAdmin( // change to CommandLineRunner if required
            AdminService adminService,
            PasswordEncoder passwordEncoder) {
        return "".isEmpty();
    }
}
