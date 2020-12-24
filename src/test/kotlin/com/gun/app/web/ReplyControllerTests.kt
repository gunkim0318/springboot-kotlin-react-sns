package com.gun.app.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Reply
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.ReplyRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.ReplyRequestDto
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.equalTo
import org.junit.Assert.assertThat
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
class ReplyControllerTests {
    @LocalServerPort
    private val port: Int = 0
    @Autowired
    private lateinit var context: WebApplicationContext

    private lateinit var mvc: MockMvc

    private val url: String = "http://localhost:$port/api/reply"

    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var postsRepository: PostsRepository
    @Autowired
    private lateinit var replyRepository: ReplyRepository

    @Before
    fun setup(){
        userRepository.deleteAll()
        this.mvc = MockMvcBuilders
                .webAppContextSetup(context)
                .build();

        val user: User = User(
                name = "gunkim",
                email = "test",
                role = Role.USER
        )
        userRepository.save(user)


        val posts: Posts = Posts(
                contents = "안녕하세요",
                user = user
        )
        postsRepository.save(posts)
        replyRepository.save(
                Reply(
                        contents = "New Reply",
                        user = user,
                        posts = posts
                )
        )
    }
    @Test
    fun getReplyList(){
        val user: User = userRepository.findAll()[0]
        val posts: Posts = postsRepository.findAll()[0]
        val url: String = "${url}/${posts.id}"

        IntStream.rangeClosed(1, 30).forEach { i ->
            replyRepository.save(
                    Reply(
                            contents = "New Reply $i",
                            user = user,
                            posts = posts
                    )
            )
        }
        val result: String = mvc.perform(get(url).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andReturn().response.getContentAsString()

        val resList: Collection<Map<String, String>> = ObjectMapper().readValue<Collection<Map<String, String>>>(result)

        resList.forEach { map ->
            println(map)
        }
    }
    @Test
    fun modifyReply(){
        val contents: String = "modify Reply"

        val replyId: Long = replyRepository.findAll()[0].id!!
        val requestDto: ReplyRequestDto = ReplyRequestDto(
                replyId,
                contents
        )
        mvc.perform(
                post(url).contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
                        .content(ObjectMapper().writeValueAsString(requestDto))
        ).andExpect(status().isOk())

        val reply: Reply = replyRepository.findAll()[0]
        assertThat(reply.contents, `is`(equalTo(contents)))
    }
    @Test
    fun deleteReply(){
        val replyId: Long = replyRepository.findAll()[0].id!!
        val url: String = "$url/$replyId"

        mvc.perform(delete(url))
                .andExpect(status().isOk())

        val replySize: Int = replyRepository.findAll().size
        assertThat(replySize, `is`(0))
    }
}