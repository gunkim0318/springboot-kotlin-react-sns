package com.gun.app.web.dto

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Reply
import com.gun.app.domain.entity.User

class ReplyRequestDto   (
        val replyId: Long? = null,
        val postsId: Long? = null,
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