package com.gun.app

import com.gun.app.domain.Role
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableJpaAuditing
@SpringBootApplication
class Application{
    @Bean
    fun runner(userRepository: UserRepository) = CommandLineRunner {
        val user: User = User(null,
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
                )
        userRepository.save(user)
    }
}

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}