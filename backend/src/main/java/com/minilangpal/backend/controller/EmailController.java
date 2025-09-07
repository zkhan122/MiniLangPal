package com.minilangpal.backend.controller;

import com.minilangpal.backend.services.EmailService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;

@RestController
public class EmailController {
    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/send-email")
    public String sendEmail(@RequestParam String to) {
        try {
            emailService.sendEmail(to, "Test Email", "Hello World!");
            return "Email sent successfully to " + to;
        } catch (MessagingException e) {
            return "Failed to send email: " + e.getMessage();
        }
    }
}
