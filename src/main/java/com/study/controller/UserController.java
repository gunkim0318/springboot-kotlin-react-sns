package com.study.controller;

import com.study.service.JwtService;
import com.study.service.UserService;
import com.study.util.ParsingUtil;
import com.study.util.VOParsingUtil;
import com.study.vo.UserVO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.InvocationTargetException;
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
        log.info("= LOGIN CALL ========== "+reqMap.toString());
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
     * @return
     */
    @PostMapping("/signUp")
    public Map<String, Map<String, Object>> signUp(@RequestBody Map<String, Map<String, Object>> reqMap) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {

        log.info("= SIGNUP CALL ====== "+reqMap.toString());
        log.info("Map =======");
        log.info("Map : "+jwtKeyMap.toString());

        String jwt = reqMap.get("reqData").get("body").toString();

        Map<String, Object> handJwt = (Map<String, Object>) reqMap.get("reqData").get("header");
        String mapJwt = handJwt.get("mapKey").toString();
        String signature = jwtKeyMap.get(mapJwt);

        log.info("JWT : "+jwt);
        log.info("SIGNATURE : "+signature);

        Jws<Claims> cla =  jwtService.jwtClar(signature, jwt);

        VOParsingUtil voUtil = new VOParsingUtil(UserVO.class);
        UserVO vo = (UserVO) voUtil.parsing(cla);

        ParsingUtil util = new ParsingUtil();

        int signCheck = userService.signUp(vo);
        if(signCheck == 1){
            util.headPut("resCode", 0);
        }
        log.info("RESULT : "+util.jsonResult());
        return util.jsonResult();
    }

    /**
     * 핸드셰이킹 처리
     * @return
     */
    @PostMapping("/handshake")
    public Map<String, Map<String, Object>> handshake() {
        log.info("= HANDSHAKE CALL =======");
        String jwt = jwtService.jwtCreate();
        String key = UUID.randomUUID().toString();
        jwtKeyMap.put(key, jwt);
        log.info("JwtMap : ");
        log.info("        KEY : "+key);
        log.info("        VALUE : "+jwt);

        ParsingUtil util = new ParsingUtil();
        util.headPut("resCode", 0);
        util.headPut("page", "/user/handshake");
        util.headPut("page", "handshake");
        util.headPut("mapKey", key);
        util.headPut("jwtKey", jwt);

        return util.jsonResult();
    }
}