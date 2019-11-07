package com.study.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
@Slf4j
public class JwtServiceImpl implements  JwtService{
    private static final String SECRET_KEY = "MySecrete";

    private byte[] generateKey(){
        byte[] key = null;
        try {
            key = SECRET_KEY.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            log.error("Making secret Key Error :: ", e);
        }

        return key;
    }
    @Override
    public String jwtCreate() {
        String jwtString = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("issueDate", System.currentTimeMillis())
                .signWith(SignatureAlgorithm.HS256, this.generateKey())
                .setSubject("내용")
                .compact();

        return jwtString;
    }
    public void jwtClar(String jwt){
        Jws<Claims> claims = null;
        try {
            claims = Jwts.parser().setSigningKey(this.generateKey())
                    .parseClaimsJws(jwt);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        log.info("JWT : "+claims.getBody());
    }
}
