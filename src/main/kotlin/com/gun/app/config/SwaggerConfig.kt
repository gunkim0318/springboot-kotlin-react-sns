package com.gun.app.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiInfo
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2


@Configuration
@EnableSwagger2
class SwaggerConfig {
    @Bean
    fun api(): Docket? {
        return Docket(DocumentationType.SWAGGER_2)
                .apiInfo(this.swaggerInfo()) //api 정보 등록
                .select()
                .apis(RequestHandlerSelectors.any())
                .build()
                .useDefaultResponseMessages(true)
    }
    private fun swaggerInfo(): ApiInfo? {
        return ApiInfoBuilder()
                .title("SNS API 문서")
                .description("SNS 프로젝트입니다.")
                .version("1.0.0")
                .build()
    }
}