package com.gun.app.web

import com.gun.app.web.dto.PostsRequestDto
import com.gun.app.service.dto.PostsResponseDto
import com.gun.app.service.PostsService
import io.swagger.annotations.ApiImplicitParam
import io.swagger.annotations.ApiImplicitParams
import io.swagger.annotations.ApiOperation
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/posts")
class PostsController(
        private val postsService: PostsService
) {
    @ApiOperation("게시글 목록 조회")
    @ApiImplicitParam(name="pageNum", value="페이지 번호", dataType = "int")
    @GetMapping("/list/{pageNum}")
    fun getPostsList(@PathVariable pageNum: Int): ResponseEntity<List<PostsResponseDto>>{
        val postsList = postsService.getPostsList(pageNum)
        return ResponseEntity(postsList, HttpStatus.OK)
    }
    @ApiOperation("게시글 등록")
    @ApiImplicitParam(name="contents", value="게시글 내용", dataType = "string")
    @PostMapping("")
    fun createPosts(@RequestBody dto: PostsRequestDto): ResponseEntity<String>{
        postsService.createPosts(dto)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @ApiOperation("게시글 삭제")
    @ApiImplicitParam(name="id", value="삭제할 게시글 번호", dataType = "string")
    @DeleteMapping("/{id}")
    fun deletePosts(@PathVariable id: Long): ResponseEntity<String>{
        postsService.deletePosts(id)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @ApiOperation("게시글 수정")
    @ApiImplicitParams(
            ApiImplicitParam(name="id", value="수정할 게시글 번호", dataType="long"),
            ApiImplicitParam(name="contents", value="수정할 게시글 내용", dataType="string")
    )
    @PutMapping("")
    fun modifiedPosts(@RequestBody dto: PostsRequestDto): ResponseEntity<String>{
        postsService.modifyPosts(dto)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @ApiOperation("게시글 좋아요")
    @ApiImplicitParam(name="id", value="좋아요를 누를 게시글 번호")
    @PostMapping("/likes/{id}")
    fun increaseLikes(@PathVariable id: Long): ResponseEntity<String>{
        postsService.increaseLike(id)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
}