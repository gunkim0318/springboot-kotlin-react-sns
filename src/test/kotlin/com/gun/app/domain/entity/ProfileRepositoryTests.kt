package com.gun.app.domain.entity

import com.gun.app.domain.Role
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.ProfileRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class ProfileRepositoryTests {
    @Autowired
    private val profileRepository: ProfileRepository? = null
    @Autowired
    private val userRepository: UserRepository? = null
    @Autowired
    private val postsRepository: PostsRepository? = null

    @Before
    fun setup(){
        postsRepository!!.deleteAll()
        userRepository!!.deleteAll()
        profileRepository!!.deleteAll()

        val user: User = userRepository.save(User(
                null,
                "gunkim",
                "gunkim0318@gmail.com",
                Role.ADMIN
        ))
        profileRepository.save(Profile(
                null,
                null,
                null,
                null,
                null,
                user
        ))
    }
    @Test
    fun updateTest(){
        val profile: Profile = profileRepository!!.findAll()[0]

        profile.info1 = "제 이름은"
        profile.info2 = "gunkim"
        profile.info3 = "입니다"
        profileRepository.save(profile)

        val findProfile: Profile = profileRepository.findAll()[0]
        assertEquals(findProfile.info1, "제 이름은")
        assertEquals(findProfile.info2, "gunkim")
        assertEquals(findProfile.info3, "입니다")
    }
}