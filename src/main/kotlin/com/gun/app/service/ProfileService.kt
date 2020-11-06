package com.gun.app.service

import com.gun.app.dto.ProfileRequestDto
import com.gun.app.dto.ProfileResponseDto

interface ProfileService {
    /**
     * TODO: 해당 유저의 프로필 반환
     */
    fun getProfile(): ProfileResponseDto
    /**
     * TODO: 해당 유저의 프로필 작성
     */
    fun createProfile(dto: ProfileRequestDto)

    /**
     * TODO: 해당 유저의 프로필 수정
     */
    fun modifiedProfile(dto: ProfileRequestDto)
}