package com.study.service;

import com.study.mapper.UserMapper;
import com.study.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements  UserService{
    @Autowired
    private UserMapper userMapper;

    @Override
    public int signUp(UserVO vo) {
        return userMapper.signUp(vo);
    }
}
