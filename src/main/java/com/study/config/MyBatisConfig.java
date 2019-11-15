package com.study.config;

import com.zaxxer.hikari.HikariDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

/**
 * MyBatis 관련 설정을 하기 위한 클래스
 */
@Configuration
@MapperScan(basePackages = {"com.study.mapper"})
@EnableTransactionManagement
public class MyBatisConfig {
    @Autowired
    private ApplicationContext applicationContext;

    /**
     * DataSource 빈 등록
     * @return
     */
    @Bean
    @ConfigurationProperties("spring.datasource")
    public DataSource getDataSource(){
        return new HikariDataSource();
    }

    /**
     * SqlSessionFactory 빈 등록
     * @param dataSource
     * @return
     * @throws Exception
     */
    @Bean
    public SqlSessionFactory getSqlSessionFactory (DataSource dataSource) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        return sqlSessionFactoryBean.getObject();
    }

    /**
     * sqlSessionTemplate 빈 등록
     * @param sqlSessionFactory
     * @return
     */
    @Bean(name = "sqlSessionTemplate")
    public SqlSessionTemplate sqlSession(SqlSessionFactory sqlSessionFactory) {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

    /**
     * 마이바티스 트랜잭션 연동을 위한 빈
     * @return
     */
    @Bean
    public DataSourceTransactionManager transactionManager(){
        return new DataSourceTransactionManager(getDataSource());
    }
}
