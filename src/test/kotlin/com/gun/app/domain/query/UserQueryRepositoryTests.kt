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
        userRepository.save(mainUser)

        mainUser.addFollowers(User(
                name= "followers1",
                email= "followers1@gmail.com",
                role= Role.USER
        ))
        mainUser.addFollowers(User(
                name= "followers2",
                email= "followers2@gmail.com",
                role= Role.USER
        ))
        mainUser.addFollowing(User(
                name= "following1",
                email= "following1@gmail.com",
                role= Role.USER
        ))
        mainUser.addFollowing(User(
                name= "following2",
                email= "following2@gmail.com",
                role= Role.USER
        ))
        mainUser.addFollowing(User(
                name= "following3",
                email= "following3@gmail.com",
                role= Role.USER
        ))
        userRepository.save(mainUser)
    }

    @Test
    fun findFollowersTest() {
        var followersCnt = userQueryRepository.findByFollowers("gunkim").size
        assertThat(followersCnt, `is`(equalTo(2)))
    }
    @Test
    fun findAllTest() {
        var userCnt = userRepository.findAll().size
        assertThat(userCnt, `is`(equalTo(6)))
    }
    @Test
    fun findByFollowingTest() {
        var followingCnt = userQueryRepository.findByFollowing("gunkim").size
        assertThat(followingCnt, `is`(equalTo(3)))
    }
}