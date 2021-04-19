package com.gun.app.domain.repository

import com.gun.app.domain.Role
import com.gun.app.domain.entity.User
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@DataJpaTest
class UserRepositoryTests {
    @Autowired
    private lateinit var userRepository: UserRepository

    @Before
    fun setup(){
        userRepository.deleteAll()

        val user = User(
                name = "gunkim",
                email = "gunkim0318@gmail.com",
                role = Role.USER
        )
        userRepository.save(user)
    }

    @Test
    fun insertTest(){
        val user: User = userRepository.findAll()[0]

        assertEquals("gunkim", user.name)
        assertEquals("gunkim0318@gmail.com", user.email)
    }
    @Test
    fun updateTest(){
        val user: User = userRepository.findAll()[0]
        user.modifyName("kimgun")
        user.modifyEmail("gunkim0318@daum.net")

        userRepository.save(user)

        val findUser: User = userRepository.findAll()[0]
        assertEquals("kimgun", findUser.name)
        assertEquals("gunkim0318@daum.net", findUser.email)
    }
    @Test
    fun deleteTest(){
        val user: User = userRepository.findAll()[0]
        userRepository.delete(user)

        val userSize: Int = userRepository.findAll().size
        assertEquals(userSize, 0)
    }
    @Test
    fun followInsertTest(){
        userRepository.save(User(
                name = "gun",
                email = "gunkim0318@gmail.com",
                role = Role.USER
        ))
        val user1: User = userRepository.findAll()[0]
        val user2: User = userRepository.findAll()[1]
        user1.addFollowers(user2)
        userRepository.save(user1)

        val findUser: User = userRepository.findAll()[0]
        assertEquals(findUser.followers.size, 1)
    }
    @Test
    fun followingInsertTest(){
        userRepository.save(User(
                name = "gun",
                email = "gunkim0318@gmail.com",
                role = Role.USER
        ))
        val user1: User = userRepository.findAll()[0]
        val user2: User = userRepository.findAll()[1]
        user1.addFollowing(user2)
        userRepository.save(user1)

        val findUser: User = userRepository.findAll()[0]
        assertEquals(findUser.following.size, 1)
    }
}