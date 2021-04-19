package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Reply
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.ReplyRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.web.dto.ReplyRequestDto
import com.gun.app.service.dto.ReplyResponseDto
import org.hamcrest.CoreMatchers.`is`
import org.junit.Assert.assertThat
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class ReplyServiceTests {
    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var postsRepository: PostsRepository
    @Autowired
    private lateinit var replyRepository: ReplyRepository
    @Autowired
    private lateinit var replyService: ReplyService

    @Before
    fun setup(){
        userRepository.deleteAll()

        val user = User(
                name = "gunkim",
                email = "gunkim0318@gmail.com",
                role = Role.ADMIN
        )
        userRepository.save(user)

        val posts = Posts(
                contents = "게시글 내용",
                user = user
        )
        postsRepository.save(posts)

        val reply = Reply(
                contents = "댓글 내용",
                user = user,
                posts = posts
        )
        replyRepository.save(reply)
    }
    @Test
    fun getReplyListTest(){
        val postsId: Long = postsRepository.findAll()[0].id!!

        val replyList: List<ReplyResponseDto> = replyService.getReplyList(postsId)

        assertThat(replyList.size, `is`(1))
    }
    @Test
    fun modifyReplyTest(){
        val replyId: Long = replyRepository.findAll()[0].id!!

        val dto = ReplyRequestDto(
            replyId=replyId,
            contents="댓글 수정"
        )
        replyService.modifyReply(dto)

        val findReply: Reply = replyRepository.findAll()[0]
        assertThat(findReply.contents, `is`("댓글 수정"))
    }
    @Test
    fun deleteReplyTest(){
        val replyId: Long = replyRepository.findAll()[0].id!!

        replyService.deleteReply(replyId)

        val replyListSize: Int = replyRepository.findAll().size
        assertThat(replyListSize, `is`(0))
    }
}