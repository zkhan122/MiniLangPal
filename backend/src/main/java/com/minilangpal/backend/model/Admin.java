package com.minilangpal.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "admin")

public class Admin {

    @Id
    @Column(name="admin_id", nullable = false)
//    @GeneratedValue(strategy = GenerationType.IDENTITY) -> not generated as ids are fixed and statically assigned for privacy purposes
    private String admin_id;

    @NotNull
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String username;
    @NotNull
    private String password;
    //    @NotNull
//    private String hashedPassword;
    @NotNull
    @Column(name = "Role")
    private String role;

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public String getAdmin_id() {
        return admin_id;
    }

    public String getEmail() {
        return email;
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

//    public String getHashedPassword() {
//        return hashedPassword;
//    }
}