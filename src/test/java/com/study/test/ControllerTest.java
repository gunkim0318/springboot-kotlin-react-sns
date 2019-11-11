package com.study.test;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * 유저 컨트롤러 테스트
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
@Slf4j
public class ControllerTest {
    @Autowired
    private MockMvc mock;

    /**
     * 회원가입 테스트
     * @throws Exception
     */
    @Test
    public void signUpTest() throws Exception {
        MvcResult mvcResult = mock.perform(post("/user/handshake")).andExpect(status().isOk()).andReturn();

        log.info("RESULT : "+mvcResult.getResponse().getContentAsString());

        String result = mvcResult.getResponse().getContentAsString();
    }
}
