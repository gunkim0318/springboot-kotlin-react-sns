package com.gun.app.dto

import com.gun.app.domain.entity.Posts

class PostsResponseDto(posts: Posts) {
    val contents: String = posts.contents
    val likes: Int = posts.likeTos.size
}