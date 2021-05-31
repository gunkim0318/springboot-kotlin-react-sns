package com.gun.app.service

import com.gun.app.web.dto.ReplyRequestDto
import com.gun.app.service.dto.ReplyResponseDto

interface ReplyService {
    /**
     * TODO: 해당 게시글 댓글 목록을 반환
     */
    fun getReplyList(postsId: Long): MutableList<ReplyResponseDto>

    /**
     * TODO: 댓글 작성
     */
    fun createReply(requestDto: ReplyRequestDto)

    /**
     * TODO: 해당 댓글의 내용 수정
     */
    fun modifyReply(dto: ReplyRequestDto)

    /**
     * TODO: 해당 번호의 댓글 삭제
     */
    fun deleteReply(id: Long)
}