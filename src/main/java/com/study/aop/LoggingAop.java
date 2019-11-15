package com.study.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.util.Arrays;

/**
 * service 로깅을 위한 aop 클래스
 */
@Component
@Aspect
@Slf4j
public class LoggingAop {
    /**
     * 로깅을 위한 메소드
     * @param jp
     * @return
     * @throws Throwable
     */
    @Around("execution(* com.study.service.*ServiceImpl.*(..))")
    public Object  logging(ProceedingJoinPoint jp) throws Throwable{
        log.info("메서드 명: " + jp.getSignature().getName() + " 시작");
        log.info("파라미터: " + Arrays.toString(jp.getArgs()));

        Object result = jp.proceed();

        log.info("메서드 명: " + jp.getSignature().getName() + " 종료");
        return result;
    }
}