package com.minilangpal.backend.services;

import com.minilangpal.backend.model.Admin;
import com.minilangpal.backend.model.DiagnosticQuiz;
import com.minilangpal.backend.model.DiagnosticQuizRequest;
import com.minilangpal.backend.repository.AdminRepository;
import com.minilangpal.backend.repository.DiagnosticQuizRepository;
import com.minilangpal.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.minilangpal.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Service
public class DiagnosticQuizService {

    @Autowired
    private DiagnosticQuizRepository quizRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    public boolean saveQuizScore(DiagnosticQuizRequest quizRequest) {
        Optional<User> userMetaData = userRepository.findByUsername(quizRequest.getUsername());

        if (userMetaData.isEmpty()) {
            // IF THE users TABLE IS EMPTY CHECK admin table
            Optional<Admin> adminMetaData = adminRepository.findByUsername(quizRequest.getUsername());
            Admin admin = adminMetaData.get();
            DiagnosticQuiz quiz = new DiagnosticQuiz();
            quiz.setQuiz_attempt_id(UUID.randomUUID().toString());
            quiz.setQuiz_score(quizRequest.getQuizScore());
            quiz.setLanguage("Arabic");
            quiz.setUsername(quizRequest.getUsername());
            quiz.setUser(admin); // PROBLEM

            try {
                System.out.println("DiagnosticQuizService: Attempting to save DiagnosticQuiz entity: " + quiz);
                quizRepository.save(quiz);
                System.out.println("Quiz saved succesfully for user: " + admin.getUsername() + "<->" + admin.getAdmin_id());
                return true;
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        } else {

            // else if user DOES EXIST in users table
            User user = userMetaData.get();
            DiagnosticQuiz quiz = new DiagnosticQuiz();
            quiz.setQuiz_attempt_id(UUID.randomUUID().toString());
            quiz.setQuiz_score(quizRequest.getQuizScore());
            quiz.setLanguage("Arabic");
            quiz.setUsername(quizRequest.getUsername());
            quiz.setUser(user);

            try {
                System.out.println("DiagnosticQuizService: Attempting to save DiagnosticQuiz entity: " + quiz);
                quizRepository.save(quiz);
                System.out.println("Quiz saved succesfully for user: " + user.getUsername() + "<->" + user.getUser_id());
                return true;
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        }
    }
}
