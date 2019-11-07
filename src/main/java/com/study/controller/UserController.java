package com.study.controller;

import com.study.service.JwtService;
import com.study.service.UserService;
import com.study.util.ParsingUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
     * @return
     */
    @PostMapping("/login")
    public Map<String, Map<String, Object>> login(@RequestBody Map<String, Map<String, Object>> reqMap){
        ParsingUtil util = new ParsingUtil();

//        int loginCheck = userService.login(vo);
//        if(loginCheck == 1){
//            util.headPut("resCode", 0);
//        }else if(loginCheck == 0){
//            util.headPut("resCode", 101);
//            util.headPut("netDesc", "해당 계정이 없습니다.");
//        }else{
//            util.headPut("resCode", 101);
//            util.headPut("netDesc", "해당 비밀번호가 없습니다.");
//        }
        return util.jsonResult();
    }

    /**
     * 회원가입 처리
     * @return
     */
    @PostMapping("/signUp")
    public Map<String, Map<String, Object>> signUp(@RequestBody Map<String, Map<String, Object>> reqMap){
        log.info("OBJ=======");
        log.info(reqMap.toString());
        log.info("JWT=======");
        jwtService.jwtClar(reqMap.get("reqData").get("body").toString());
//        String jwt = reqMap.get("reqData").get("body").toString();
//        ParsingUtil util = new ParsingUtil();
//        log.info(util.toString());
//        if(userService.signUp(vo) == 1){
//            util.headPut("resCode", 0);
//        }else{
//            util.headPut("resCode", 100);
//        }
//        util.headPut("page", "/signUp");
//        util.headPut("netKind", "get");

//        return util.jsonResult();
        return null;
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
        util.headPut("jwtKey", jwt);

        return util.jsonResult();
    }
}