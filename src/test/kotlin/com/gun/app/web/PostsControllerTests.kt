package com.gun.app.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.PostsRequestDto
import org.assertj.core.api.Assertions.assertThat
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
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import java.util.stream.IntStream

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PostsControllerTests {
    @LocalServerPort
    private val port: Int = 0

    @Autowired
    private val postsRepository: PostsRepository? = null

    @Autowired
    private val userRepository: UserRepository? = null

    @Autowired
    private val context: WebApplicationContext? = null

    private var mvc: MockMvc? = null

    private val url: String = "http://localhost:$port/api/posts"

    @Before
    fun setup(){
        this.mvc = MockMvcBuilders
                .webAppContextSetup(context!!)
                .build();

        postsRepository!!.deleteAll()
        userRepository!!.deleteAll()
    }
    @Test
    fun 게시글_입력_테스트(){
        val user: User = User(null,
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository!!.save(user)

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
    @Test
    fun 게시글_수정_테스트(){
        val contents: String = "수정 테스트"

        val user: User = User(null, "gunkim", "gunkim0318@gmail.com", Role.USER)
        userRepository!!.save(user)
        postsRepository!!.save(Posts(null, "새 게시글", user))

        val postsId: Long = postsRepository.findAll().get(0).id!!

        val dto: PostsRequestDto = PostsRequestDto(postsId, contents)

        mvc!!.perform(put(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(status().isOk())

        val posts: Posts = postsRepository.findAll().get(0)
        assertThat(posts.contents).isEqualTo(contents)
    }
    @Test
    fun 게시글_삭제_테스트(){
        val contents: String = "수정 테스트"

        val user: User = User(null, "gunkim", "gunkim0318@gmail.com", Role.USER)
        userRepository!!.save(user)
        postsRepository!!.save(Posts(null, "새 게시글", user))

        val postsId: Long = postsRepository.findAll().get(0).id!!

        val url = "${this.url.toString()}/$postsId"

        mvc!!.perform(delete(url))
                .andExpect(status().isOk())

        val postsCnt: Int = postsRepository.findAll().size

        assertThat(postsCnt).isEqualTo(0)
    }
    @Test
    fun 게시글_목록_조회_테스트(){
        val user: User = User(null, "gunkim", "gunkim0318@gmail.com", Role.USER)
        userRepository!!.save(user)

        IntStream.rangeClosed(1, 100).forEach{i ->
            postsRepository!!.save(Posts(null, "new Posts $i", user))
        }

        val url: String = "${this.url.toString()}/list"

        val result: String = mvc!!.perform(get(url)).andExpect(status().isOk).andReturn().response.getContentAsString()

        print(result)
    }
}