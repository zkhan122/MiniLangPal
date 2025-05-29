package com.minilangpal.backend.services;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage; // Multipurpose Internet Mail Extensions Message

@Service
public class EmailService {
    private final JavaMailSender mailSender;

    // Constructor-based dependency injection
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     * Sends an email with the given details.
     *
     * @param to      Recipient email address
     * @param subject Subject of the email
     * @param text    Email content (supports HTML)
     * @throws MessagingException if email sending fails
     */
    public void sendEmail(String to, String subject, String text) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom("noreply@minilangpal.com");
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(text,true); // enable HTML content

        mailSender.send(message);
    }
}
