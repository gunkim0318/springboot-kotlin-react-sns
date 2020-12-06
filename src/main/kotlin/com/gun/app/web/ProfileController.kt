package com.gun.app.web

import com.gun.app.dto.ProfileRequestDto
import com.gun.app.dto.ProfileResponseDto
import com.gun.app.service.ProfileService
import io.swagger.annotations.ApiImplicitParam
import io.swagger.annotations.ApiImplicitParams
import io.swagger.annotations.ApiOperation
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/profile")
class ProfileController(
        private val profileService: ProfileService
) {
    @ApiOperation("프로필 조회")
    @ApiImplicitParam(name="name", value="프로필 조회할 유저 이름", dataType = "string")
    @GetMapping("/{name}")
    fun getProfile(@PathVariable name: String): ResponseEntity<ProfileResponseDto> {
        val profile: ProfileResponseDto = profileService.getProfile(name)
        return ResponseEntity(profile, HttpStatus.OK)
    }
    @ApiOperation("프로필 수정")
    @ApiImplicitParams(
            ApiImplicitParam(name="image", value="수정할 프로필 이미지 주소", dataType="string"),
            ApiImplicitParam(name="nickname", value="수정할 프로필 닉네임", dataType="string"),
            ApiImplicitParam(name="info", value="수정할 프로필 소개", dataType="string")
    )
    @PutMapping("")
    fun modifyProfile(@RequestBody dto: ProfileRequestDto){
        profileService.modifiedProfile(dto)
    }
    @ApiOperation("프로필 작성")
    @ApiImplicitParams(
            ApiImplicitParam(name="image", value="프로필 이미지 주소", dataType="string"),
            ApiImplicitParam(name="nickname", value="프로필 닉네임", dataType="string"),
            ApiImplicitParam(name="info", value="프로필 소개", dataType="string")
    )
    @PostMapping("")
    fun createProfile(@RequestBody dto: ProfileRequestDto){
        profileService.createProfile(dto)
    }
}