package com.minilangpal.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
@Entity
@Table(name = "users")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    @NotNull
    // user attributes
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String phone;
    @NotNull
    private String username;
    @NotNull
    private String password;
    @NotNull
    private String profileImageURL;

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public void setProfileImageURL(String profileImageURL) {
        this.profileImageURL = profileImageURL;
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
}
