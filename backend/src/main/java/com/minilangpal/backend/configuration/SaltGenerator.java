package com.minilangpal.backend.configuration;

import java.util.Random;

public class SaltGenerator {

    // https://en.wikipedia.org/wiki/Salt_(cryptography)
    public String generateSalt() {
        String alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

        StringBuilder saltString = new StringBuilder();

        Random random = new Random();
        while (saltString.length() < 7) {
            int i = (int) (random.nextFloat() * alpha.length());
            saltString.append(alpha.charAt(i));
        }

        return saltString.toString();
    }
}
