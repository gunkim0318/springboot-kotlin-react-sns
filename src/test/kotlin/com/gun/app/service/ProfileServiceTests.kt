package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.ProfileRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.ProfileRequestDto
import com.gun.app.dto.ProfileResponseDto
import junit.framework.Assert.assertEquals
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
    private lateinit var profileRepository: ProfileRepository
    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var profileService: ProfileService
    @Before
    fun setup(){
        userRepository.deleteAll()

        val user = User(
                name = "gunkim",
                email = "gunkim0318@gmail.com",
                role = Role.ADMIN
        )
        userRepository.save(user)

        profileRepository.save(Profile(
                image = "이미지 주소",
                info = "저는 사람입니다.",
                user = user
        ))
    }

    @Test
    fun getProfileTest(){
        val dto: ProfileResponseDto = profileService.getProfile("gunkim")

        assertEquals(dto.image, "이미지 주소")
        assertEquals(dto.info, "저는 사람입니다.")
    }
    @Test
    fun createProfileTest(){
        profileRepository.deleteAll()

        val dto = ProfileRequestDto(
                image = "이미지 주소",
                info = "저는 사람입니다.",
                nickname = "안녕하지라"
        )
        profileService.createProfile(dto)

        val profile: Profile = profileRepository.findAll()[0]
        assertEquals(profile.image, "이미지 주소")
        assertEquals(profile.info, "저는 사람입니다.")
    }
    @Test
    fun modifyProfileTest(){
        val dto = ProfileRequestDto(
                image = "바뀐 이미지 주소",
                info = "저는 사람입니다.",
                nickname = "안녕하지라"
        )
        profileService.modifiedProfile(dto)

        val profile: Profile = profileRepository.findAll()[0]
        assertEquals(profile.image, "바뀐 이미지 주소")
        assertEquals(profile.info, "저는 사람입니다.")
    }
}