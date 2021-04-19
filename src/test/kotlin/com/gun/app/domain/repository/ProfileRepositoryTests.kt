package com.gun.app.domain.repository

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Profile
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
class ProfileRepositoryTests {
    @Autowired
    private lateinit var profileRepository: ProfileRepository
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

        val profile = Profile(
                image = "이미지 주소",
                info = "Hello! World!",
                user = user
        )
        user.profile = profile
        profileRepository.save(profile)
    }

    @Test
    fun insertTest(){
        val profile: Profile = profileRepository.findAll()[0]

        assertEquals("이미지 주소", profile.image)
        assertEquals("Hello! World!", profile.info)
    }
    @Test
    fun updateTest(){
        val profile: Profile = profileRepository.findAll()[0]
        profile.info = "수정된 소개"
        profile.image = "수정된 이미지 주소"

        profileRepository.save(profile)

        val findProfile: Profile = profileRepository.findAll()[0]
        assertEquals("수정된 소개", findProfile.info)
        assertEquals("수정된 이미지 주소", findProfile.image)
    }
    @Test
    fun deleteTest(){
        val profile: Profile = profileRepository.findAll()[0]
        profileRepository.delete(profile)

        val profileSize: Int = profileRepository.findAll().size
        assertEquals(profileSize, 0)
    }
}