package com.gun.app.dto

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User

class PostsResponseDto(posts: Posts, user: User) {
    val id: Long? = posts.id
    val contents: String = posts.contents
    val likes: Int = posts.likes.size
    val username: String = posts.user.name
    val isLikes: Boolean = posts.likes.contains(user)
}