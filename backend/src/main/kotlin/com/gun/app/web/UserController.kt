package com.gun.app.web

import com.gun.app.service.UserService
import com.gun.app.service.dto.PeopleResponseDto
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/user")
class UserController(
    private val userService: UserService
) {
    @GetMapping(path = ["followers"])
    fun getFollowers(): ResponseEntity<List<PeopleResponseDto>> {
        return ResponseEntity.ok(userService.getFollowers("gunkim"))
    }
    @GetMapping(path = ["following"])
    fun getFollowing(): ResponseEntity<List<PeopleResponseDto>> {
        val res = userService.getFollowing("gunkim")
        println(res)
        return ResponseEntity.ok(res)
    }
}