package com.minilangpal.backend.services;

import com.minilangpal.backend.model.PasswordResetToken;
import com.minilangpal.backend.model.User;
import com.minilangpal.backend.repository.PasswordResetTokenRepository;
import com.minilangpal.backend.repository.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import java.util.UUID;

@Service
public class PasswordResetService {

    @Autowired private PasswordResetTokenRepository tokenRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private EmailService emailService;
    @Autowired private JavaMailSender mailSender;

    public String createToken(User user) {
        String token = UUID.randomUUID().toString();
        PasswordResetToken prt = new PasswordResetToken();
        prt.setToken(token);
        prt.setUser(user);
        prt.setExpiration(LocalDateTime.now().plusMinutes(30));
        tokenRepository.save(prt);
        return token;
    }

    public void sendResetEmail(String email, String token) throws MessagingException {
        String url = "http://localhost:3000/reset-password/" + token;

        emailService.sendEmail(email, "Password Reset Request - VALID FOR 30 MINUTES", "Click or copy into browser: " + url);
    }
}
