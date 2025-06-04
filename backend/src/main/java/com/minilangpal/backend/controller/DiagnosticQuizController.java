package com.minilangpal.backend.controller;

import com.minilangpal.backend.exception.InvalidCredentialsException;
import com.minilangpal.backend.exception.UserNotFoundException;
import com.minilangpal.backend.model.*;
import com.minilangpal.backend.repository.AdminRepository;
import com.minilangpal.backend.repository.DiagnosticQuizRepository;
import com.minilangpal.backend.repository.UserRepository;
import com.minilangpal.backend.services.AdminService;
import com.minilangpal.backend.services.DiagnosticQuizService;
import com.minilangpal.backend.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DiagnosticQuizController {

    private final DiagnosticQuizRepository quizRepository;
    private final DiagnosticQuizService quizService;
    private final UserService userService;
    private final UserRepository userRepository;

    private final AdminService adminService;
    private final AdminRepository adminRepository;

    private static final Logger logger = LoggerFactory.getLogger(DiagnosticQuizController.class);

    @Autowired
    public DiagnosticQuizController(DiagnosticQuizRepository quizRepository,
                                    DiagnosticQuizService quizService,
                                    UserService userService,
                                    UserRepository userRepository,
                                    AdminService adminService,
                                    AdminRepository adminRepository) {
        this.quizRepository = quizRepository;
        this.quizService = quizService;
        this.userService = userService;
        this.userRepository = userRepository;
        this.adminService = adminService;
        this.adminRepository = adminRepository;
    }

    @PostMapping("/quiz-score")
    @CrossOrigin(origins = "http://localhost:3000")
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


    @GetMapping("/check-quiz-score-exists")
    @CrossOrigin(origins = "http://localhost:3000")
    ResponseEntity<String> getQuizScore(@RequestBody  DiagnosticQuiz diagnosticQuiz) {


        String user_id = diagnosticQuiz.getUser().getUser_id();
        if (user_id != null) {
            boolean userScoreExists = quizService.quizScoreExistenceUser(user_id);
            if (userScoreExists) {
                return ResponseEntity.ok("Quiz score exists for user");
            } else {
                return ResponseEntity.ok("Quiz score does NOT exist for user");
            }
        }

        String admin_id = diagnosticQuiz.getAdmin().getAdmin_id();
        if (admin_id != null) {
            boolean adminScoreExists = quizService.quizScoreExistenceAdmin(admin_id);
            if (adminScoreExists) {
                return ResponseEntity.ok("Quiz score exists for admin");
            } else {
                return ResponseEntity.ok("Quiz score does NOT exist for admin");
            }
        }
        return ResponseEntity.badRequest().body("No user or admin found");
    }
}
