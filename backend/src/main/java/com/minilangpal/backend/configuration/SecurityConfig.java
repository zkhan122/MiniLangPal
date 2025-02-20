package com.minilangpal.backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors() // Enable CORS
                .and()
                .csrf().disable() // Disable CSRF (only if you don’t need it)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Adjust this based on security needs
                );

        return http.build();
    }
}

