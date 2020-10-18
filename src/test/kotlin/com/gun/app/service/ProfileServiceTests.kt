package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.ProfileRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.ProfileRequestDto
import com.gun.app.dto.ProfileResponseDto
import junit.framework.Assert.assertEquals
import org.junit.Assert
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner


@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class ProfileServiceTests {
    @Autowired
    private val profileRepository: ProfileRepository? = null
    @Autowired
    private val userRepository: UserRepository? = null
    @Autowired
    private val profileService: ProfileService? = null
    @Autowired
    private val postsRepository: PostsRepository? = null

    @Before
    fun setup(){
        postsRepository!!.deleteAll()
        profileRepository!!.deleteAll()
        userRepository!!.deleteAll()

        val user: User = User(null,
                "gunkim",
                "gunkim0318@gmail.com",
                Role.ADMIN
        )
        userRepository.save(user)

        profileRepository.save(Profile(
                null,
                "이미지 주소",
                "앗뇽1",
                "앗뇽2",
                "앗뇽3",
                user
        ))
    }

    @Test
    fun getProfileTest(){
        val dto: ProfileResponseDto = profileService!!.getProfile("gunkim");

        assertEquals(dto.image, "이미지 주소")
        assertEquals(dto.info1, "앗뇽1")
        assertEquals(dto.info2, "앗뇽2")
        assertEquals(dto.info3, "앗뇽3")
    }
    @Test
    fun createProfileTest(){
        val dto: ProfileRequestDto = ProfileRequestDto(
                null,
                "이미지 주소",
                "앗뇽1",
                "앗뇽2",
                "앗뇽3"
        )
        profileService!!.createProfile("gunkim", dto)

        val profile: Profile = profileRepository!!.findAll()[0]
        assertEquals(profile.image, "이미지 주소")
        assertEquals(profile.info1, "앗뇽1")
        assertEquals(profile.info2, "앗뇽2")
        assertEquals(profile.info3, "앗뇽3")
    }
    @Test
    fun modifyProfileTest(){
        val dto: ProfileRequestDto = ProfileRequestDto(
                null,
                "바뀐 이미지 주소",
                "바뀐 앗뇽1",
                "바뀐 앗뇽2",
                "바뀐 앗뇽3"
        )
        profileService!!.modifiedProfile("gunkim", dto)

        val profile: Profile = profileRepository!!.findAll()[0]
        assertEquals(profile.image, "바뀐 이미지 주소")
        assertEquals(profile.info1, "바뀐 앗뇽1")
        assertEquals(profile.info2, "바뀐 앗뇽2")
        assertEquals(profile.info3, "바뀐 앗뇽3")
    }
}