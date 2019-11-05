package com.study.service;

import com.study.mapper.UserMapper;
import com.study.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserServiceImpl implements  UserService{
    @Autowired
    private UserMapper userMapper;

    @Override
    public int signUp(UserVO vo) {
        return userMapper.signUp(vo);
    }

    @Override
    public int login(UserVO vo) {
        UserVO loginVO = userMapper.login(vo);

        if(loginVO != null){
            if(loginVO.getUser_pw() == vo.getUser_pw()) {
                log.info("로그인이 되었음");
                return 1;
            }else{
                log.info("비밀번호가 틀렸음");
                return 0;
            }
        }else{
            log.info("해당 아이디가 없음");
            return -1;
        }
    }
}
