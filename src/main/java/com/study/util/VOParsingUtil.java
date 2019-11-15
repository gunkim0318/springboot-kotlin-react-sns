package com.study.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

import java.lang.reflect.InvocationTargetException;

/**
 * 해독한 Jwt를 vo로 변환하기 위한 유틸
 * @param <T> vo타입
 */
public class VOParsingUtil<T> {
    private Class<T> vo;

    /**
     * 변환하기 위한 vo타입을 받음
     * @param clas 변환하기 위한 vo타입
     */
    public VOParsingUtil(Class<T> clas){
        this.vo = clas;
    }

    /**
     * jwt를 vo로 변환
     * @param claims jwt
     * @return
     */
    public T parsing(Jws<Claims> claims){
        Claims cla = claims.getBody();

        T returnVO = null;
        try {
            returnVO = vo.newInstance();
        }catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }

        try{
            for(String key : cla.keySet()){
                String value = cla.get(key).toString();
                String methodName = "set"+key.substring(0, 1).toUpperCase()+key.substring(1).toLowerCase();
                returnVO.getClass().getMethod(methodName, String.class).invoke(returnVO, value);
            }
        }catch(NoSuchMethodException e){

        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return returnVO;
    }
}
