package com.minilangpal.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "user_starter_quiz_score")

public class DiagnosticQuiz {
    @Id
    @Column(length = 50, nullable = false)
    private String quiz_attempt_id;

    @NotNull
    private int quiz_score;

    @NotNull
    private String language;


    @NotNull
    private String username;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;


    public int getQuiz_score() {
        return quiz_score;
    }

    public void setQuiz_score(int quiz_score) {
        this.quiz_score = quiz_score;
    }

    public String getLanguage() {
        return language;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setUser(Admin admin) {
        this.admin = admin;
    }

    public User getUser() {
        return this.user;
    }


    public void setLanguage(String language) {
        this.language = language;
    }

    public String getQuiz_attempt_id() {
        return quiz_attempt_id;
    }

    public void setQuiz_attempt_id(String quiz_attempt_id) {
        this.quiz_attempt_id = quiz_attempt_id;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}