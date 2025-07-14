package com.bharath.msa.service;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(HttpStatus.NOT_FOUND) // 404 status code
public class ResourceNotFoundException extends RuntimeException {
    // Constructor that takes a message as input
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

