package com.gun.app.domain.query

import com.gun.app.domain.Role
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.UserRepository
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.equalTo
import org.hamcrest.MatcherAssert.assertThat
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import java.util.stream.IntStream

@RunWith(SpringRunner::class)
@SpringBootTest
class UserQueryRepositoryTests {
    @Autowired
    private lateinit var userQueryRepository: UserQueryRepository
    @Autowired
    private lateinit var userRepository: UserRepository

    @Before
    fun setup() {
        userRepository.deleteAll()

        val mainUser = User(
                name= "gunkim",
                email= "gunkim.dev@gmail.com",
                role= Role.USER
        )
        IntStream.rangeClosed(1, 2).forEach {
            mainUser.addFollowers(User(
                name= "followers${it}",
                email= "followers${it}@gmail.com",
                role= Role.USER
            ))
        }
        IntStream.rangeClosed(1, 3).forEach {
            mainUser.addFollowing(User(
                name= "following${it}",
                email= "following${it}@gmail.com",
                role= Role.USER
            ))
        }
        userRepository.save(mainUser)
    }

    @Test
    fun findFollowersTest() {
        val followersCnt = userQueryRepository.findByFollowers("gunkim").size
        assertThat(followersCnt, `is`(equalTo(2)))
    }
    @Test
    fun findAllTest() {
        val userCnt = userRepository.findAll().size
        assertThat(userCnt, `is`(equalTo(6)))
    }
    @Test
    fun findByFollowingTest() {
        val followingCnt = userQueryRepository.findByFollowing("gunkim").size
        assertThat(followingCnt, `is`(equalTo(3)))
    }
}