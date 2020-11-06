package com.gun.app.dto

import com.gun.app.domain.entity.Posts

class PostsResponseDto(posts: Posts) {
    val id: Long? = posts.id
    val contents: String = posts.contents
    val likes: Int = posts.likesList.size
    val username: String = posts.user.name
}