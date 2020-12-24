package com.gun.app.domain

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Reply
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.ReplyRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@DataJpaTest
class ReplyRepositoryTests {
    @Autowired
    private lateinit var replyRepository: ReplyRepository
    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var postsRepository: PostsRepository

    @Before
    fun setup(){
        val user: User = User(
                name = "gunkim",
                email = "gunkim0318@gmail.com",
                role = Role.USER
        )
        userRepository.save(user)
        val posts: Posts = Posts(
                contents = "게시글 내용",
                user = user
        )
        postsRepository.save(posts)
        val reply: Reply = Reply(
                contents = "댓글 내용",
                user = user,
                posts = posts
        )
        replyRepository.save(reply)
    }
    @Test
    fun insertTest(){
        val reply: Reply = replyRepository.findAll()[0]

        assertEquals("댓글 내용", reply.contents)
    }
    @Test
    fun updateTest(){
        val reply: Reply = replyRepository.findAll()[0]
        reply.contents = "Hello! Reply!"

        val findReply: Reply = replyRepository.findAll()[0]
        assertEquals("Hello! Reply!", reply.contents)
    }
    @Test
    fun deleteTest(){
        val reply: Reply = replyRepository.findAll()[0]
        replyRepository.delete(reply)

        val replyListSize: Int = replyRepository.findAll().size
        assertEquals(0, replyListSize)
    }
}