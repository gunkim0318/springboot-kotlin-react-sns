package com.study.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.sql.Date;

@Slf4j
@Data
@ToString
@AllArgsConstructor
/**
 * 유저 테이블과 매칭되는 VO
 * @author gunkim
 */
public class UserVO {
    //유저 시퀀스 번호
    private int user_no;
    //유저 아이디
    private String user_id;
    //유저 비밀번호
    private String user_pw;
    //유저 이름
    private String user_name;
    //유저 성별
    private String user_gender;
    //유저 전화번호
    private String user_tel;
    //유저 상태코드
    private String user_status_cd;
    //유저 비밀번호 실패 횟수
    private int user_pw_fail_cnt;
    //유저 등록자
    private String user_reg_id;
    //유저 등록일자
    private Date user_reg_date;
}
