package com.gun.app.web

import com.gun.app.dto.ProfileRequestDto
import com.gun.app.service.ProfileService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/profile")
class ProfileController(
        private val profileService: ProfileService
) {
    @GetMapping("/{name}")
    fun getProfile(@PathVariable name: String){
        profileService.getProfile(name)
    }
    @PutMapping("")
    fun modifyProfile(@RequestBody dto: ProfileRequestDto){
        profileService.modifiedProfile(dto)
    }
    @PostMapping("")
    fun createProfile(@RequestBody dto: ProfileRequestDto){
        profileService.createProfile(dto)
    }
}