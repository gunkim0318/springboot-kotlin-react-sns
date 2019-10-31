package com.study.mapper;

import com.study.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

/**유저 관련 매퍼
 * @author gunkim
 */
@Mapper
public interface UserMapper {
    /**
     * vo에 담긴 유저 아이디를 통해 유저 정보를 조회해옴
     * @param vo
     * @return
     */
    public UserVO login(UserVO vo);

    /**
     * vo에 담긴 정보로 회원가입 처리
     * @param vo
     * @return
     */
    public int signUp(UserVO vo);
}