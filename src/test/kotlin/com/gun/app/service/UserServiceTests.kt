package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.UserRepository
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.transaction.annotation.Transactional

@RunWith(SpringJUnit4ClassRunner::class)
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
        val user1 = User(
                name = "gunkimwer",
                email = "gunkim.dev@gmail.com",
                role = Role.ADMIN
        )
        val user2 = User(
                name = "gunkimwer",
                email = "gunkim.dev@gmail.com",
                role = Role.ADMIN
        )
        val user3 = User(
                name = "gunkimwing",
                email = "gunkim.dev@gmail.com",
                role = Role.ADMIN
        )
        user.addFollowers(user1)
        user.addFollowers(user2)

        user.addFollowing(user3)

        userRepository.save(user)
    }
    @Transactional
    @Test
    fun getfollowersTest(){
        val name = "gunkim"
        val followers = userService.getFollowers(name)
        println(followers)
    }
    @Transactional
    @Test
    fun getfollowingTest(){
        val name = "gunkim"
        val followers = userService.getFollowing(name)
        println(followers)
    }
}