package com.gun.app.service

import com.gun.app.dto.ReplyRequestDto
import com.gun.app.dto.ReplyResponseDto

interface ReplyService {
    /**
     * TODO: 해당 게시글 댓글 목록을 반환
     */
    fun getReplyList(postsId: Long): List<ReplyResponseDto>

    /**
     * TODO: 해당 댓글의 내용 수정
     */
    fun modifyReply(dto: ReplyRequestDto)

    /**
     * TODO: 해당 번호의 댓글 삭제
     */
    fun deleteReply(id: Long)
}