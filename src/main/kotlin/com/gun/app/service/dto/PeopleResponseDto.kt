package com.gun.app.service.dto

import com.gun.app.domain.entity.User

data class PeopleResponseDto(val user: User){
    val name: String = user.name
    val profileImage: String? = user.profile?.image
}