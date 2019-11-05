package com.study.controller;

import com.study.service.JwtService;
import com.study.service.UserService;
import com.study.util.ParsingUtil;
import com.study.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * 유저 관련 컨트롤러
 */
@RestController
@RequestMapping(value = "/user")
@Slf4j
public class UserController {
    private static Map<String, String> jwtKeyMap = new HashMap<String, String>();

    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;

    /**
     * 로그인 처리
     * @param vo
     * @return
     */
    @PostMapping("/login")
    public Map<String, Map<String, Object>> login(UserVO vo){
        ParsingUtil util = new ParsingUtil();

        int loginCheck = userService.login(vo);
        if(loginCheck == 1){
            util.headPut("resCode", 0);
        }else if(loginCheck == 0){
            util.headPut("resCode", 101);
            util.headPut("netDesc", "해당 계정이 없습니다.");
        }else{
            util.headPut("resCode", 101);
            util.headPut("netDesc", "해당 비밀번호가 없습니다.");
        }
        return util.jsonResult();
    }

    /**
     * 회원가입 처리
     * @param vo 회원가입 처리할 유저의 정보
     * @return
     */
    @GetMapping("/signUp")
    public Map<String, Map<String, Object>> signUp(UserVO vo){
        ParsingUtil util = new ParsingUtil();
        log.info(util.toString());
        if(userService.signUp(vo) == 1){
            util.headPut("resCode", 0);
        }else{
            util.headPut("resCode", 100);
        }
        util.headPut("page", "/signUp");
        util.headPut("netKind", "get");

        return util.jsonResult();
    }

    /**
     * 핸드셰이킹 처리
     * @return
     */
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