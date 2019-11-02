package com.study.controller;

import com.study.service.JwtService;
import com.study.service.UserService;
import com.study.util.ParsingUtil;
import com.study.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    private static Map<String, String> jwtKeyMap = new HashMap<String, String>();

    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;

    @RequestMapping(value = "/signUp", method = {RequestMethod.GET})
    public void signUp(UserVO vo){

    }
    @PostMapping("/handshake")
    public Map<String, Map<String, Object>> handshake(){
        String jwt = jwtService.jwtCreate();
        String key = "A112";
        jwtKeyMap.put(key, jwt);

        ParsingUtil util = new ParsingUtil();
        util.headPut("resCode", 200);
        util.bodyPut("mapKey", key);
        util.bodyPut("jwtKey", jwt);

        return util.jsonResult();
    }
}