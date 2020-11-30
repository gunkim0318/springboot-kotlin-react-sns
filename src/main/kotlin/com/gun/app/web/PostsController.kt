package com.gun.app.web

import com.gun.app.dto.PostsRequestDto
import com.gun.app.dto.PostsResponseDto
import com.gun.app.service.PostsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/posts")
class PostsController(
        private val postsService: PostsService
) {
    @GetMapping("/list/{pageNum}")
    fun getPostsList(@PathVariable pageNum: Int): ResponseEntity<List<PostsResponseDto>>{
        val postsList = postsService.getPostsList(pageNum)
        return ResponseEntity(postsList, HttpStatus.OK)
    }
    @PostMapping("")
    fun createPosts(@RequestBody dto: PostsRequestDto): ResponseEntity<String>{
        postsService.createPosts(dto)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @DeleteMapping("/{id}")
    fun deletePosts(@PathVariable id: Long): ResponseEntity<String>{
        postsService.deletePosts(id)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @PutMapping("")
    fun modifiedPosts(@RequestBody dto: PostsRequestDto): ResponseEntity<String>{
        postsService.modifyPosts(dto)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @PostMapping("/likes/{id}")
    fun increaseLikes(@PathVariable id: Long): ResponseEntity<String>{
        postsService.increaseLike(id)
        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
}