package com.minilangpal.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;


// @Table(name = "user_starter_quiz_score")
public class DiagnosticQuizRequest {

    private String quizAttemptId;
    private int quizScore;
    private String language;
    private String userId;
    private String username;
    private String role;
    // private String password;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    public String getQuizAttemptId() {
        return quizAttemptId;
    }

    public void setQuizAttemptId(String quizAttemptId) {
        this.quizAttemptId = quizAttemptId;
    }

    public int getQuizScore() {
        return quizScore;
    }

    public void setQuizScore(int quizScore) {
        this.quizScore = quizScore;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getUserId() {
        return userId;
    }

    public String getRole() {
        return role;
    }

//    public String getPassword() {
//        return password;
//    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}