package com.study.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class JwtServiceImpl implements  JwtService{

    @Override
    public String jwtCreate() {
        String jwtString = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("issueDate", System.currentTimeMillis())
                .setSubject("내용")
                .compact();

        return jwtString;
    }
    public void jwtClar(String jwt){

    }
}
