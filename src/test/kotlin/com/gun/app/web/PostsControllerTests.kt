package com.gun.app.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.dto.PostsRequestDto
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.web.server.LocalServerPort
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PostsControllerTests {
    @LocalServerPort
    private val port: Int = 0

    @Autowired
    private val postsRepository: PostsRepository? = null

    @Autowired
    private val context: WebApplicationContext? = null

    private var mvc: MockMvc? = null

    private val url: String = "http://localhost:$port/api/posts"

    @Before
    fun setup(){
        this.mvc = MockMvcBuilders
                .webAppContextSetup(context!!)
                .build();
    }
    @Test
    fun 게시글_입력_테스트(){
        val contents: String = "게시글 입력 테스트"

        val dto: PostsRequestDto = PostsRequestDto(
                null,
                contents
        )

        mvc!!.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(status().isOk())

        val posts: Posts = postsRepository!!.findAll().get(0)
        assertThat(posts.contents).isEqualTo(contents)
    }
}