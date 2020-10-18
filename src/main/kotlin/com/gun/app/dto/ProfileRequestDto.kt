package com.gun.app.dto

import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User

class ProfileRequestDto(
        val id: Long?,
        val image: String,
        val info1: String,
        val info2: String,
        val info3: String
) {
    fun toEntity(user: User): Profile{
        return Profile(
                null,
                this.image,
                this.info1,
                this.info2,
                this.info3,
                user
        )
    }
}