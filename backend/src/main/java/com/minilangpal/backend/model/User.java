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
    @Column(length = 50, nullable = false)
    private String user_id;
    @NotNull
    // user attributes
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String username;
    @Transient
    private String password;
    @NotNull
    private String hashedPassword; // to be compared to password upon login

    private String phone; // can be null

    public void setUser_id(String user_id) {
        SaltGenerator salt = new SaltGenerator();
        this.user_id = salt.generateSalt();;
    }

    @PrePersist
    public void prePersist() {
        if (this.user_id == null || this.user_id.isEmpty()) {
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

    public String getUser_id() {
        return user_id;
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

//    public String getProfileImageURL() {
//        return profileImageURL;
//    }
}
