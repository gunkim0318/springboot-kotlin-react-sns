package com.study.controller;

import com.study.mapper.HomeMapper;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/")
@Slf4j
@EnableAutoConfiguration
public class HomeController {
    @Setter(onMethod_ = @Autowired)
    private HomeMapper mapper;

    @RequestMapping(value = "hello", method = RequestMethod.GET)
    public @ResponseBody String hello(){
        return mapper.testSelect().toString();
    }
}