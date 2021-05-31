package com.gun.app.web.dto

import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User

class ProfileRequestDto(
        val id: Long? = null,
        val image: String,
        val info: String,
        val nickname: String
) {
    fun toEntity(user: User): Profile{
        return Profile(
                image = this.image,
                info = this.info,
                nickname = this.nickname,
                user = user
        )
    }
}