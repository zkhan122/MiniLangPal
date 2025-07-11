package com.minilangpal.backend.model;

import com.minilangpal.backend.configuration.SaltGenerator;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")

public class User {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id", length = 50, nullable = false)
    private String userId;
    @NotNull
    // user attributes
    private String name;

    private String email;
    @NotNull
    private String username;
    @Transient
    private String password;
    @NotNull
    private String hashedPassword; // to be compared to password upon login

    private String phone; // can be null

    @NotNull
    private String role; // role = USER (admin -> role = ADMIN)

    public void setUser_id(String user_id) {
        SaltGenerator salt = new SaltGenerator();
        this.userId = salt.generateSalt();;
    }

    @PrePersist
    public void prePersist() {
        if (this.userId == null || this.userId.isEmpty()) {
            setUser_id("user_" + System.currentTimeMillis());  // Example fallback if not set
        }
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRole() {
        this.role = "USER";
    }

    public String getUser_id() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() { return role; }

}