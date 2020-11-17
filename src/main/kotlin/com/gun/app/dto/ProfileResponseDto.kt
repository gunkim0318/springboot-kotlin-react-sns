package com.gun.app.dto

import com.gun.app.domain.entity.Profile

class ProfileResponseDto(profile: Profile){
    val image: String? = profile.image
    val info: String? = profile.info
    val nickname: String? = profile.nickname
    val name: String = profile.user.name
    val followers: Int = profile.user.followers.size
    val following: Int = profile.user.following.size
}