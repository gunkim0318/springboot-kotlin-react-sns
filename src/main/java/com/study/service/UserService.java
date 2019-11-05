package com.study.service;

import com.study.vo.UserVO;

public interface UserService {
    public int signUp(UserVO vo);

    public int login(UserVO vo);
}
