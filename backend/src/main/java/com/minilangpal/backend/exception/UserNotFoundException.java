package com.minilangpal.backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("Could not find the user with id " + id, null, true, false);
    }

    public UserNotFoundException(String username) {
        super("Could not find the user with username " + username, null, true, false);
    }

}
