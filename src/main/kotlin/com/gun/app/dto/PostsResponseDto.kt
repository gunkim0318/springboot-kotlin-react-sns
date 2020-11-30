package com.gun.app.dto

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import java.time.LocalDateTime

class PostsResponseDto(posts: Posts, user: User) {
    val id: Long? = posts.id
    val contents: String = posts.contents
    val likeCnt: Int = posts.likes.size
    val isLikes: Boolean = posts.likes.contains(user)
    val name: String? = posts.user.profile?.nickname
    val image: String? = user.profile?.image
    val creDate: String = posts.createdDate.format(java.time.format.DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH:mm:ss"))
}