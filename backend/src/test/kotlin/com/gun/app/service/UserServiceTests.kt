package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.UserRepository
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.equalTo
import org.junit.Assert.assertThat
import org.junit.Before
import org.junit.Test
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.extension.ExtendWith
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.transaction.annotation.Transactional
import java.util.stream.IntStream

@RunWith(SpringRunner::class)
@SpringBootTest
class UserServiceTests {
    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var userService: UserService

    @Before
    fun setup(){
        userRepository.deleteAll()

        val user = User(
                name = "gunkim",
                email = "gunkim.dev@gmail.com",
                role = Role.ADMIN
        )
        IntStream.rangeClosed(1, 10).forEach {
            user.addFollowers(User(
                name = "gunkimwer${it}",
                email = "gunkim.dev${it}@gmail.com",
                role = Role.ADMIN
            ))
        }
        IntStream.rangeClosed(1, 5).forEach {
            user.addFollowing(User(
                name = "gunkimwer${it}",
                email = "gunkim.dev${it}@gmail.com",
                role = Role.ADMIN
            ))
        }
        userRepository.save(user)
    }
    @Transactional
    @Test
    fun getfollowersTest(){
        val name = "gunkim"

        val followersCnt = userService.getFollowers(name).size

        assertThat(followersCnt, `is`(equalTo(10)))
    }
    @Transactional
    @Test
    fun getfollowingTest(){
        val name = "gunkim"
        val followingCnt = userService.getFollowing(name).size

        assertThat(followingCnt, `is`(equalTo(5)))
    }
}