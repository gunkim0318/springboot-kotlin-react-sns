package com.gun.app.service

import com.gun.app.dto.ReplyRequestDto
import com.gun.app.dto.ReplyResponseDto

interface ReplyService {
    /**
     * TODO: 해당 게시글 댓글 목록을 반환
     */
    fun getReplyList(id: Long): List<ReplyResponseDto>

    /**
     * TODO: 해당 댓글의 작성자가 맞을 경우 댓글 수정
     */
    fun modifiedReply(name: String, dto: ReplyRequestDto)

    /**
     * TODO: 해당 댓글의 작성자가 맞을 경우 댓글 삭제
     */
    fun deleteReply(name: String, id: Long)
}