package com.minilangpal.backend.services;

import com.resend.core.exception.ResendException;
import org.springframework.beans.factory.annotation.Value;
import com.minilangpal.backend.model.PasswordResetToken;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.PasswordResetTokenRepository;
import com.minilangpal.backend.repository.UserRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import java.util.Optional;
import java.util.UUID;

@Service
public class PasswordResetService {

    @Autowired private PasswordResetTokenRepository tokenRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private EmailService emailService;
    @Autowired private JavaMailSender mailSender;
    @Value("${app.frontend-base-url}")
    private String appBaseUrl;

    public String createToken(User user) {
        // deleting any existing tokens for user first as multiple tokens for same user not allowed
        Optional<PasswordResetToken> existingToken = tokenRepository.findByUser(user);
        existingToken.ifPresent(tokenRepository::delete);

        String token = UUID.randomUUID().toString();
        PasswordResetToken prt = new PasswordResetToken();
        prt.setToken(token);
        prt.setUser(user);
        prt.setExpiration(LocalDateTime.now().plusMinutes(30));
        tokenRepository.save(prt);
        return token;
    }

    public void sendResetEmail(String email, String token) throws MessagingException, ResendException {
        String url = appBaseUrl + "/reset-password/" + token;

        emailService.sendEmail(email, "Password Reset Request - VALID FOR 30 MINUTES", "Click or copy into browser: " + url);
    }
}
