package com.gun.app.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.gun.app.domain.Role
import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
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
    private val postsRepository: PostsRepository? = null

    @Autowired
    private val userRepository: UserRepository? = null

    @Autowired
    private val profileRepository: ProfileRepository? = null

    @Autowired
    private val context: WebApplicationContext? = null

    private var mvc: MockMvc? = null

    private val url: String = "http://localhost:$port/api/profile"

    @Before
    fun setup(){
        this.mvc = MockMvcBuilders
                .webAppContextSetup(context!!)
                .build();

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
        val dto: ProfileRequestDto = ProfileRequestDto(
            null,
            "입력된 이미지 주소",
            "입력된 정보1",
            "입력된 정보2",
            "입력된 정보3"
        )
        mvc!!.perform(get(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk)
    }
    @Test
    fun modifyProfileTest(){
        val dto: ProfileRequestDto = ProfileRequestDto(
                null,
                "바뀐 이미지 주소",
                "바뀐 정보1",
                "바뀐 정보2",
                "바뀐 정보3"
        )
        mvc!!.perform(put(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(MockMvcResultMatchers.status().isOk)

        val profile: Profile = profileRepository!!.findAll()[0]
        assertEquals(profile.image, dto.image)
        assertEquals(profile.info1, dto.info1)
        assertEquals(profile.info2, dto.info2)
        assertEquals(profile.info3, dto.info3)
    }
    @Test
    fun createProfileTest(){
        val dto: ProfileRequestDto = ProfileRequestDto(
                null,
                "입력된 이미지 주소",
                "입력된 정보1",
                "입력된 정보2",
                "입력된 정보3"
        )
        mvc!!.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(MockMvcResultMatchers.status().isOk)

        val profile: Profile = profileRepository!!.findAll()[1]
        assertEquals(profile.image, dto.image)
        assertEquals(profile.info1, dto.info1)
        assertEquals(profile.info2, dto.info2)
        assertEquals(profile.info3, dto.info3)
    }
}