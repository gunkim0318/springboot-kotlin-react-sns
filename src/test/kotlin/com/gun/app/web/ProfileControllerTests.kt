package com.gun.app.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.gun.app.domain.Role
import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.ProfileRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.ProfileRequestDto
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.web.server.LocalServerPort
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProfileControllerTests {
    @LocalServerPort
    private val port: Int = 0

    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var profileRepository: ProfileRepository

    @Autowired
    private lateinit var context: WebApplicationContext

    private lateinit var mvc: MockMvc

    private val url: String = "http://localhost:$port/api/profile"

    @Before
    fun setup(){
        this.mvc = MockMvcBuilders
                .webAppContextSetup(context)
                .build();

        userRepository.deleteAll()

        val user: User = User(
                name = "gunkim",
                email = "gunkim0318@gmail.com",
                role = Role.ADMIN
        )
        userRepository.save(user)

        profileRepository.save(Profile(
                image = "이미지 주소",
                info = "Hello!",
                user = user
        ))
    }
    @Test
    fun getProfileTest(){
        val dto: ProfileRequestDto = ProfileRequestDto(
            image = "입력된 이미지 주소",
            info = "Hello!",
            nickname = "안녕하지라"
        )
        mvc.perform(get("$url/gunkim")
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk)
    }
    @Test
    fun modifyProfileTest(){
        val dto: ProfileRequestDto = ProfileRequestDto(
                image = "바뀐 이미지 주소",
                info = "Update Hello!",
                nickname = "안녕하지"
        )
        mvc.perform(put(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(MockMvcResultMatchers.status().isOk)

        val profile: Profile = profileRepository.findAll()[0]
        assertEquals(profile.image, dto.image)
        assertEquals(profile.info, dto.info)
    }
    @Test
    fun createProfileTest(){
        profileRepository.deleteAll()

        val dto: ProfileRequestDto = ProfileRequestDto(
                image = "입력된 이미지 주소",
                info = "Hello!",
                nickname = "안녕하지라"
        )
        mvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(MockMvcResultMatchers.status().isOk)

        val profile: Profile = profileRepository.findAll()[0]
        assertEquals(profile.image, dto.image)
        assertEquals(profile.info, dto.info)
    }
}