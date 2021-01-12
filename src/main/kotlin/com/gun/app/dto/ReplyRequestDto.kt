package com.gun.app.dto

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Reply
import com.gun.app.domain.entity.User

class ReplyRequestDto(
        val replyId: Long?,
        val postsId: Long?,
        val contents: String
){
    fun toEntity(user: User, posts: Posts): Reply {
        return Reply(
                user = user,
                posts = posts,
                contents = contents
        )
    }
}