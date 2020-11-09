package com.gun.app.dto

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User

class PostsResponseDto(posts: Posts, user: User) {
    val id: Long? = posts.id
    val contents: String = posts.contents
    val likeCnt: Int = posts.likes.size
    val isLikes: Boolean = posts.likes.contains(user)
    val name: String = posts.user.name
}