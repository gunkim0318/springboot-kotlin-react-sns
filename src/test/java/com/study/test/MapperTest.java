package com.study.test;

import com.study.config.MyBatisConfig;
import com.study.mapper.UserMapper;
import com.study.vo.UserVO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes = {MyBatisConfig.class})
public class MapperTest {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void selectTest() {
        UserVO vo = new UserVO();
        vo.setUser_id("gunkim0318@gmail.com");
        vo.setUser_pw("rlarjs123");

        userMapper.login(vo);
    }
}