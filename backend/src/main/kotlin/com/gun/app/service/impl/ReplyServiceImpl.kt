package com.gun.app.service.impl

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Reply
import com.gun.app.domain.entity.User
import com.gun.app.domain.query.ReplyQueryRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.ReplyRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.web.dto.ReplyRequestDto
import com.gun.app.service.dto.ReplyResponseDto
import com.gun.app.service.ReplyService
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.lang.IllegalArgumentException

@Service
class ReplyServiceImpl(
        private val replyRepository: ReplyRepository,
        private val postsRepository: PostsRepository,
        private val userRepository: UserRepository,
        private val replyQueryRepository: ReplyQueryRepository
): ReplyService {
    @Transactional(readOnly = true)
    override fun getReplyList(postsId: Long): MutableList<ReplyResponseDto> {
        return replyQueryRepository.findAllByPostsId(postsId)
    }

    override fun createReply(requestDto: ReplyRequestDto) {
        val posts: Posts = postsRepository.findById(requestDto.postsId!!).orElseThrow {
            IllegalArgumentException("잘못된 posts Id : ${requestDto.postsId}") }
        val user: User = userRepository.findByName("gunkim")
                .orElseThrow { IllegalArgumentException("잘못된 user Name : gunkim") }

        replyRepository.save(requestDto.toEntity(user, posts))
    }

    override fun modifyReply(dto: ReplyRequestDto) {
        val reply: Reply = replyRepository.findById(dto.replyId!!)
                .orElseThrow { IllegalArgumentException("잘못된 reply Id : $dto.id") }

        reply.modifyContents(dto.contents)
        replyRepository.save(reply)
    }
    override fun deleteReply(id: Long) {
        replyRepository.deleteById(id)
    }
}