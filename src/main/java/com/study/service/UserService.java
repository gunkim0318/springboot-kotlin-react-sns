package com.study.service;

import com.study.vo.UserVO;

/**
 * 유저 비즈니스 로직 처리를 위한 클래스
 */
public interface UserService {
    /**
     * 회원가입 처리를 위한 메소드
     * @param vo 유저 정보
     * @return
     */
    public int signUp(UserVO vo);

    /**
     * 로그인 처리를 위한 메소드
     * @param vo 유저 정보
     * @return
     */
    public int login(UserVO vo);
}
