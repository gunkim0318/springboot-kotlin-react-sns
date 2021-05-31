package com.gun.app.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.gun.app.domain.Role
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.UserRepository
import com.gun.app.service.dto.PeopleResponseDto
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import java.util.stream.IntStream

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class UserControllerTests {
    @Autowired
    private lateinit var mockMvc: MockMvc
    @Autowired
    private lateinit var userRepository: UserRepository

    @Before
    fun setup(){
        userRepository.deleteAll()

        val user = User(
            name = "gunkim",
            email = "gunkim.dev@gmail.com",
            role = Role.ADMIN
        )
        IntStream.rangeClosed(1, 10).forEach {
            user.addFollowers(
                User(
                name = "gunkimwer${it}",
                email = "gunkim.dev${it}@gmail.com",
                role = Role.ADMIN
            )
            )
        }
        IntStream.rangeClosed(1, 5).forEach {
            user.addFollowing(
                User(
                name = "gunkimwer${it}",
                email = "gunkim.dev${it}@gmail.com",
                role = Role.ADMIN
            )
            )
        }
        userRepository.save(user)
    }
    @Test
    fun followersApiTest() {
        mockMvc.perform(get("/api/user/followers"))
            .andExpect(status().isOk)
            .andDo(MockMvcResultHandlers.print())
    }
    @Test
    fun followingApiTest() {
        mockMvc.perform(get("/api/user/following"))
            .andExpect(status().isOk)
            .andDo(MockMvcResultHandlers.print())
    }
}