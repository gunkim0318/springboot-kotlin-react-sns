package com.study.service;

import com.study.util.ParsingUtil;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

/**
 * JWT관련 비즈니스 로직 처리를 위한 서비스
 */
public interface JwtService {
    /**
     * JWT 생성 후 문자열로 반환함
     * @return
     */
    public String jwtCreate();
    /**
     * JWT 생성 후 문자열로 반환함
     * @return
     */
    public String jwtCreate(ParsingUtil util, String signature);

    /**
     * 파라미터로 받은 문자열 형태의 JWT를 받아서 해독함.
     * @param jwt
     * @return
     */
    public Jws<Claims> jwtClar(String jwt);

    /**
     * 파라미터로 받은 JWT를 파라미터로 받은 key로 해독함.
     * @param key 해독하기 위한 signature key
     * @param jwt
     * @return
     */
    public Jws<Claims> jwtClar(String key, String jwt);
}
