package com.gun.app.web

import com.gun.app.dto.ReplyRequestDto
import com.gun.app.dto.ReplyResponseDto
import com.gun.app.service.ReplyService
import io.swagger.annotations.ApiImplicitParam
import io.swagger.annotations.ApiImplicitParams
import io.swagger.annotations.ApiOperation
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/reply")
class ReplyController(
        private val replyService: ReplyService
) {
    @ApiOperation("댓글 목록 조회")
    @ApiImplicitParam(name="postsId", value="댓글을 조회할 게시글 번호", dataType="string")
    @GetMapping("/{postsId}")
    fun getReplyList(@PathVariable postsId: Long): ResponseEntity<List<ReplyResponseDto>>{
        val replyList: List<ReplyResponseDto> = replyService.getReplyList(postsId)
        return ResponseEntity(replyList, HttpStatus.OK)
    }
    @ApiOperation("댓글 작성")
    @ApiImplicitParams(
            ApiImplicitParam(name="postsId", value="게시물 번호", dataType="long"),
            ApiImplicitParam(name="contents", value="댓글 내", dataType="string")
    )
    @PostMapping("")
    fun createReply(requestDto: ReplyRequestDto): ResponseEntity<String> {
        replyService.createReply(requestDto)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @ApiOperation("댓글 수정")
    @ApiImplicitParams(
            ApiImplicitParam(name="id", value="수정할 댓글 번호", dataType="string"),
            ApiImplicitParam(name="contents", value="수정할 댓글 내용", dataType="string")
    )
    @PutMapping("")
    fun modifyReply(@RequestBody requestDto: ReplyRequestDto): ResponseEntity<String>{
        replyService.modifyReply(requestDto)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @ApiOperation("댓글 삭제")
    @ApiImplicitParam(name="id", value="삭제할 댓글 번호", dataType="string")
    @DeleteMapping("/{replyId}")
    fun deleteReply(@PathVariable replyId: Long): ResponseEntity<String>{
        replyService.deleteReply(replyId)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
}