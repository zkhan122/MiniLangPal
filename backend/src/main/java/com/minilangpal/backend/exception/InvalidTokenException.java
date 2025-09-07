package com.minilangpal.backend.exception;

public class InvalidTokenException extends RuntimeException {
    public InvalidTokenException(String message) {
        super(message, null, true, false);
    }
}
