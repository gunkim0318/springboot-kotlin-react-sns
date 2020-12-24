package com.gun.app

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.Reply
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.ProfileRepository
import com.gun.app.domain.repository.ReplyRepository
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
    fun testDataInsert(userRepository: UserRepository, profileRepository: ProfileRepository, postsRepository: PostsRepository, replyRepository: ReplyRepository) = CommandLineRunner {
        val user = User(
                name = "gunkim",
                email = "gunkim0318@gmail.com",
                role = Role.ADMIN
        )

        userRepository.save(user)

        IntStream.rangeClosed(1, 30).forEach { i ->
            val posts: Posts = Posts(
                    contents = "안녕하세요 $i",
                    user = user
            )
            postsRepository.save(posts)
        }

        val profile = Profile(
                image = "https://i.pinimg.com/originals/05/1f/f3/051ff3fb781ff83c9b0f8a32f9922fa6.png",
                info = "안녕하세요 gunkim입니다.",
                nickname = "Strong Man",
                user = user
        )
        profileRepository.save(profile)

        val posts: Posts = postsRepository.findAll()[0]

        IntStream.rangeClosed(1, 10).forEach { i ->
            val reply: Reply = Reply(
                    contents = "댓글 테스트 $i",
                    user = user,
                    posts = posts
            )
            replyRepository.save(reply)
        }
    }
}

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}