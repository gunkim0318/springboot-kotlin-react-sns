package com.gun.app.dto

import com.gun.app.domain.entity.Profile

class ProfileResponseDto(profile: Profile){
    val image: String? = profile.image
    val info1: String? = profile.info1
    val info2: String? = profile.info2
    val info3: String? = profile.info3
}