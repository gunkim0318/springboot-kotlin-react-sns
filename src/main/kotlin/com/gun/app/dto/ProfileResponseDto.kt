package com.gun.app.dto

data class ProfileResponseDto(
    val image: String?,
    val info: String?,
    val nickname: String?,
    val name: String,
    val followers: Int,
    val following: Int
)