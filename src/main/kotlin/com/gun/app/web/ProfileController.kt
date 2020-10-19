package com.gun.app.web

import com.gun.app.dto.ProfileRequestDto
import com.gun.app.service.ProfileService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/profile")
class ProfileController(
        private val profileService: ProfileService
) {
    @GetMapping("")
    fun getProfile(){
        val name: String = "gunkim"
        profileService.getProfile(name)
    }
    @PutMapping("")
    fun modifyProfile(@RequestBody dto: ProfileRequestDto){
        val name: String = "gunkim"
        profileService.modifiedProfile(name, dto)
    }
    @PostMapping("")
    fun createProfile(@RequestBody dto: ProfileRequestDto){
        val name: String = "gunkim"
        profileService.createProfile(name, dto)
    }
}