package com.study.controller;

import com.study.service.JwtService;
import com.study.service.UserService;
import com.study.util.ParsingUtil;
import com.study.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping(value = "/user")
@Slf4j
public class UserController {
    private static Map<String, String> jwtKeyMap = new HashMap<String, String>();

    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;

    @RequestMapping(value = "/signUp", method = {RequestMethod.GET})
    public Map<String, Map<String, Object>> signUp(String mapKey, UserVO vo){
        ParsingUtil util = new ParsingUtil();
        if(userService.signUp(vo) == 1){
            util.headPut("resCode", 0);
        }else{
            util.headPut("resCode", 100);
        }
        util.headPut("page", "/signUp");
        util.headPut("netKind", "get");

        return util.jsonResult();
    }
    @PostMapping("/handshake")
    public Map<String, Map<String, Object>> handshake() {
        String jwt = jwtService.jwtCreate();
        String key = UUID.randomUUID().toString();
        jwtKeyMap.put(key, jwt);

        ParsingUtil util = new ParsingUtil();
        util.headPut("resCode", 0);
        util.headPut("page", "/user/handshake");
        util.headPut("page", "handshake");
        util.headPut("mapKey", key);

        return util.jsonResult();
    }
}