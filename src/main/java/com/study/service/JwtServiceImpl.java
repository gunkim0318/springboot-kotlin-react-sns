package com.study.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

@Service
public class JwtServiceImpl implements  JwtService{

    @Override
    public String jwtCreate() {
        String jwtString = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("issueDate", System.currentTimeMillis())
                .setSubject("내용")
                .signWith(SignatureAlgorithm.HS512, "aaaa")
                .compact();

        return jwtString;
    }
}
