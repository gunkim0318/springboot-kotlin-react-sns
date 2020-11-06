package com.gun.app.dto

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User

class PostsRequestDto(
        var id: Long?,
        var contents: String
){
    fun toEntity(user: User): Posts{
        return Posts(
                contents,
                user
        )
    }
}