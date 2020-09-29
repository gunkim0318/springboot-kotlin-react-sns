package com.gun.app.web

import com.gun.app.dto.PostsRequestDto
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
    @PostMapping("")
    fun createPosts(dto: PostsRequestDto): ResponseEntity<String>{
        val name: String = "gunkim"
        postsService.createPosts(name, dto)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @DeleteMapping("/{id}")
    fun deletePosts(@PathVariable id: Long): ResponseEntity<String>{
        val name: String = "gunkim"
        postsService.deletePosts(name, id)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @PutMapping("")
    fun modifiedPosts(dto: PostsRequestDto): ResponseEntity<String>{
        val name: String = "gunkim"
        postsService.modifiedPosts(name, dto)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
    @PostMapping("/{id}/likes")
    fun increaseLikes(@PathVariable id: Long): ResponseEntity<String>{
        val name: String = "gunkim"
        postsService.increaseLike(name, id)

        return ResponseEntity("SUCCESS", HttpStatus.OK)
    }
}