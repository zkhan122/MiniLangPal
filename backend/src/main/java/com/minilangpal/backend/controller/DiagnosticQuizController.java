package com.minilangpal.backend.controller;

import com.minilangpal.backend.model.DiagnosticQuiz;
import com.minilangpal.backend.model.DiagnosticQuizRequest;
import com.minilangpal.backend.repository.DiagnosticQuizRepository;
import com.minilangpal.backend.repository.UserRepository;
import com.minilangpal.backend.services.DiagnosticQuizService;
import com.minilangpal.backend.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
public class DiagnosticQuizController {

    private final DiagnosticQuizRepository quizRepository;
    private final DiagnosticQuizService quizService;
    private final UserService userService;
    private final UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(DiagnosticQuizController.class);

    @Autowired
    public DiagnosticQuizController(DiagnosticQuizRepository quizRepository,
                                    DiagnosticQuizService quizService,
                                    UserService userService,
                                    UserRepository userRepository) {
        this.quizRepository = quizRepository;
        this.quizService = quizService;
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @PostMapping("/quiz-score")
    public ResponseEntity<Map<String, String>> postQuizScore(@RequestBody DiagnosticQuizRequest request,
                                                             HttpSession session) {
        logger.info("Received /quiz-score request. Payload: {}", request);

        try {
            String authenticatedUsername = null;
            String userRoleForQuiz = (String) session.getAttribute(("role"));
            if (userRoleForQuiz != null) {
                if ("ADMIN".equals(userRoleForQuiz)) {
                    authenticatedUsername = (String) session.getAttribute("admin");
                } else if ("USER".equals(userRoleForQuiz)) {
                    authenticatedUsername = (String) session.getAttribute("user");
                }
            }

            if (request.getQuizScore() < 0) {
                logger.warn("Received invalid quiz score (negative): {}", request.getQuizScore());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("status", "error", "message", "Quiz score must be >= 0"));
            }

            logger.info("Attempting to save quiz score for user '{}' with score {}",
                    request.getUsername(), request.getQuizScore());
            boolean saved = quizService.saveQuizScore(request);
            System.out.println("REQUEST: " + request);
            System.out.println("SAVED USER QUIZ STATE: " + saved);

            if (saved) {
                logger.info("Quiz score successfully saved for user '{}'.", request.getUsername());
                return ResponseEntity.ok(Map.of(
                        "status", "success",
                        "message", "Quiz score saved",
                        "role", "USER"
                ));
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("status", "error", "message", "Failed to save quiz score. User not found or service issue."));
            }

        } catch (Exception e) {

            logger.error("An unexpected error occurred in postQuizScore for user '{}': {}",
                    request.getUsername(), e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("status", "error", "message", "An internal server error occurred."));
        }
    }

    @GetMapping("/check-diagnostic-quiz-score/{username}/{language}")
    ResponseEntity<DiagnosticQuiz> checkScoreExists(@PathVariable("username") String username,
                                                    @PathVariable("language") String language) {
        Optional<DiagnosticQuiz> quiz = quizRepository.findByUsernameAndLanguage(username, language);
        if (quiz.isPresent()) {
            DiagnosticQuiz quizData = quiz.get();
            DiagnosticQuizRequest response = new DiagnosticQuizRequest();
            response.setQuizAttemptId(quizData.getQuiz_attempt_id());
            response.setQuizScore(quizData.getQuiz_score());
            response.setLanguage(quizData.getLanguage());
            response.setUsername(quizData.getUsername());
            if (Objects.equals(response.getRole(), "ADMIN")) {
                // if the user is admin
                response.setUserId((quizData.getAdmin() != null ? quizData.getAdmin().getAdmin_id() : null));
                response.setUsername(quizData.getAdmin() != null ? quizData.getAdmin().getUsername() : null);
            } else {
                // if the user is a user (non admin)
                response.setUserId(quizData.getUser() != null ? quizData.getUser().getUser_id() : null);
                response.setUsername(quizData.getUser() != null ? quizData.getUser().getUsername() : null);
            }
            return ResponseEntity.ok(quiz.get());
        } else {
            return ResponseEntity.notFound().build(); // build() is shortcut for populating response body
        }
    }
}