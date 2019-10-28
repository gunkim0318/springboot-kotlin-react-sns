package com.study.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.study.controller"})
public class StudyApplication{
    public static void main(String[] args) {
        SpringApplication.run(StudyApplication.class, args);
    }
}