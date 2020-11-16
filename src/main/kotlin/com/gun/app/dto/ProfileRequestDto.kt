package com.gun.app.dto

import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User

class ProfileRequestDto(
        val id: Long?,
        val image: String,
        val info: String,
        val nickname: String
) {
    fun toEntity(user: User): Profile{
        return Profile(
                this.image,
                this.info,
                this.nickname,
                user
        )
    }
}