package com.minilangpal.backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfiguration {

    @Bean // using bean for dependency injection
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
