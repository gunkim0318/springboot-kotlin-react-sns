package com.study.controller;

import lombok.extern.slf4j.Slf4j;
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
    @RequestMapping(value = "hello", method = RequestMethod.GET)
    public @ResponseBody  String hello(){
        log.info("============");
        log.info("Hello World!");
        log.info("============");
        return "Hello World!";
    }
}
