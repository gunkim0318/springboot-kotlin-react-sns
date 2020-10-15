package com.gun.app.dto

import com.gun.app.domain.entity.LikeTo
import com.gun.app.domain.entity.Posts

class PostsResponseDto(posts: Posts) {
    val id: Long? = posts.id
    val contents: String = posts.contents
    val likes: Int = posts.likeTos.size
    val username: String = posts.user.name
    val isCheck: String = posts.likeTos.stream().forEach { t: LikeTo -> t}.toString()
}