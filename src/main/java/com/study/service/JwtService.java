package com.study.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

public interface JwtService {
    public String jwtCreate();

    public Jws<Claims> jwtClar(String jwt);

    public Jws<Claims> jwtClar(String key, String jwt);
}
