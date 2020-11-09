package com.gun.app.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.PostsRequestDto
import org.assertj.core.api.Assertions.assertThat
import org.hamcrest.CoreMatchers.`is`
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
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.context.WebApplicationContext
import java.util.stream.IntStream
import org.junit.Assert.assertThat
@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PostsControllerTests {
    @LocalServerPort
    private val port: Int = 2030

    @Autowired
    private lateinit var postsRepository: PostsRepository

    @Autowired
    private lateinit var userRepository: UserRepository

    @Autowired
    private lateinit var context: WebApplicationContext

    private lateinit var mvc: MockMvc

    private val url: String = "http://localhost:$port/api/posts"

    @Before
    fun setup(){
        userRepository.deleteAll()

        this.mvc = MockMvcBuilders
                .webAppContextSetup(context)
                .build();
    }
    @Test
    fun createPostsTest(){
        val user: User = User(
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository.save(user)

        val contents: String = "게시글 입력 테스트"

        val dto: PostsRequestDto = PostsRequestDto(
                null,
                contents
        )

        mvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(status().isOk())

        val posts: Posts = postsRepository.findAll().get(0)
        assertThat(posts.contents).isEqualTo(contents)
    }
    @Test
    fun modifyPostsTest(){
        val contents: String = "수정 테스트"

        val user: User = User(
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository.save(user)
        postsRepository.save(
                Posts(
                        "새 게시글",
                        user
                )
        )

        val postsId: Long = postsRepository.findAll().get(0).id!!

        val dto: PostsRequestDto = PostsRequestDto(postsId, contents)

        mvc.perform(put(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
                .content(ObjectMapper().writeValueAsString(dto)))
                .andExpect(status().isOk())

        val posts: Posts = postsRepository.findAll().get(0)
        assertThat(posts.contents).isEqualTo(contents)
    }
    @Test
    fun deletePostsTest(){
        val contents: String = "수정 테스트"

        val user: User = User(
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository.save(user)
        postsRepository.save(
                Posts(
                        "새 게시글",
                        user
                )
        )

        val postsId: Long = postsRepository.findAll().get(0).id!!

        val url = "${this.url.toString()}/$postsId"

        mvc.perform(delete(url))
                .andExpect(status().isOk())

        val postsCnt: Int = postsRepository.findAll().size

        assertThat(postsCnt).isEqualTo(0)
    }
    @Test
    @Transactional
    fun getPostsListTest(){
        val user: User = User(
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository.save(user)

        IntStream.rangeClosed(1, 100).forEach{i ->
            postsRepository.save(
                    Posts(
                            "new Posts $i",
                            user
                    )
            )
        }

        val url: String = "${this.url.toString()}/list"
        val result: String = mvc.perform(get(url))
                .andExpect(status().isOk)
                .andReturn()
                .response.getContentAsString()

        val resList: Collection<Map<String, String>> = ObjectMapper().readValue<Collection<Map<String, String>>>(result)

        resList.forEach { map ->
            println(map)
        }
    }
    @Test
    @Transactional
    fun increaseLikesTest(){
        val user: User = User(
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository.save(user)
        postsRepository.save(
                Posts(
                        "new Posts",
                        user
                )
        )

        val postsId: Long = postsRepository.findAll()[0].id!!
        val url: String = "${this.url}/likes/$postsId"

        mvc.perform(post(url))
                .andExpect(status().isOk)

        val posts: Posts = postsRepository.findAll()[0]

        assertThat(posts.likes.size, `is`(1))
    }
}