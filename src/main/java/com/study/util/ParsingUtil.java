package com.study.util;

import java.util.HashMap;
import java.util.Map;

/**
 *
 */
public class ParsingUtil {
    private Map<String, Object> headerList = new HashMap<String, Object>();
    private Map<String, Object> bodyList = new HashMap<String, Object>();

    /**
     *
     * @param name
     * @param obj
     * @throws Exception
     */
    public void headPut(String name, Object obj){
        headerList.put(name, obj);
    }

    /**
     *
     * @param name
     * @param obj
     */
    public void bodyPut(String name, Object obj){
        bodyList.put(name, obj);
    }

    /**
     *
     * @return
     */
    public Map<String, Map<String, Object>> jsonResult() {
        Map<String, Map<String, Object>> resultMap = new HashMap<String, Map<String, Object>>();

        resultMap.put("header", headerList);
        resultMap.put("body", bodyList);

        return resultMap;
    }
    @Override
    public String toString(){
        return "{'header':"+headerList.toString()+", 'body':"+bodyList.toString()+"}";
    }
}