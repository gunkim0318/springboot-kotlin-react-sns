package com.study.controller;

import com.study.service.UserService;
import com.study.util.ParsingUtil;
import com.study.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/signUp", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<String, Map<String, Object>> signUp(UserVO vo){
        ParsingUtil util = new ParsingUtil();
        util.headPut("resCode", "500");
        util.bodyPut("data", new String[]{"안녕", "김건","박현기"});

        return util.jsonResult();
    }
}
