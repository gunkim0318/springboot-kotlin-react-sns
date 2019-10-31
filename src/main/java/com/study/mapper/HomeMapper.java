package com.study.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface HomeMapper {
    @Select("Select now() from dual")
    public String testSelect();
}