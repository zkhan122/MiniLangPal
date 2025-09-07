package com.minilangpal.backend.repository;

import com.minilangpal.backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, String> {

    Optional<Admin> findByUsername(String username);
}