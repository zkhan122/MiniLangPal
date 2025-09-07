package com.minilangpal.backend.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Getter;

@Getter
@Setter
@Entity
@Table(name = "login_request")
public class LoginRequest {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 50, nullable = false)
    private String user_id;
    private String username;
    private String password;
    private String role;

    public String getUser_id() {
        return user_id;
    }

    public String getUsername() {
        return username;
    }


    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }
}