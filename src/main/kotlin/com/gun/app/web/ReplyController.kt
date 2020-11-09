package com.gun.app.web

import com.gun.app.dto.ReplyRequestDto
import com.gun.app.dto.ReplyResponseDto
import com.gun.app.service.ReplyService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/reply")
class ReplyController(
        private val replyService: ReplyService
) {
    @GetMapping("/{postsId}")
    fun getReplyList(@PathVariable postsId: Long): ResponseEntity<List<ReplyResponseDto>>{
        val replyList: List<ReplyResponseDto> = replyService.getReplyList(postsId)
        return ResponseEntity(replyList, HttpStatus.OK)
    }
    @PostMapping("")
    fun modifyReply(@RequestBody requestDto: ReplyRequestDto): ResponseEntity<String>{
        replyService.modifyReply(requestDto)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @DeleteMapping("/{replyId}")
    fun deleteReply(@PathVariable replyId: Long): ResponseEntity<String>{
        replyService.deleteReply(replyId)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
}