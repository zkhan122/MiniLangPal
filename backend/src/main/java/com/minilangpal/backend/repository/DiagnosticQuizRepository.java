package com.minilangpal.backend.repository;

import com.minilangpal.backend.model.Admin;
import com.minilangpal.backend.model.DiagnosticQuiz;
import com.minilangpal.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DiagnosticQuizRepository extends JpaRepository<DiagnosticQuiz, String> {

    DiagnosticQuiz findByUser_UserId(String userId); // _{name_of_entity_id}
    Optional<DiagnosticQuiz> findByUsernameAndLanguage(String username, String language);

}