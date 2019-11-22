package com.study.util;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

/**
 * json header, body 형식으로 파싱하기 위한 유틸
 */
public class ParsingUtil {
    @Getter
    private Map<String, Object> headerList = new HashMap<String, Object>();
    @Getter
    private Map<String, Object> bodyList = new HashMap<String, Object>();

    /** headerList에 값을 넣음
     * @param key 맵에 넣을 key
     * @param value 맵에 넣을 value
     * @throws Exception
     */
    public void headPut(String key, Object value){
        headerList.put(key, value);
    }

    /** bodyList에 값을 넣음
     * @param key 맵에 넣을 key
     * @param value 맵에 넣을 value
     */
    public void bodyPut(String key, Object value){
        bodyList.put(key, value);
    }

    /**
     *headerList 와 bodyList 를 합쳐서 Map으로 반환함.
     * @return
     */
    public Map<String, Map<String, Object>> jsonResult() {
        Map<String, Map<String, Object>> resultMap = new HashMap<String, Map<String, Object>>();

        resultMap.put("header", headerList);
        
        if(bodyList.isEmpty()){
            bodyPut("data", "");
        }

        resultMap.put("body", bodyList);

        return resultMap;
    }
}