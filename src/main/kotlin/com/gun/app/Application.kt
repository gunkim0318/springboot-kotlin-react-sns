package com.gun.app

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import java.util.stream.IntStream

@EnableJpaAuditing
@SpringBootApplication
class Application{
    @Bean
    fun runner(userRepository: UserRepository, postsRepository: PostsRepository) = CommandLineRunner {
        val user: User = User(null,
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
                )
        userRepository.save(user)

        IntStream.rangeClosed(1, 15).forEach { i ->
            postsRepository.save(Posts(null,
                    "${i}번째 게시글입니다.",
                    user
            ))
        }
    }
}

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}