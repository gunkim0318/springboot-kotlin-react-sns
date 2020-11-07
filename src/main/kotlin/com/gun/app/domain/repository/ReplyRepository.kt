package com.gun.app.domain.repository

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.Reply
import org.springframework.data.jpa.repository.JpaRepository

interface ReplyRepository: JpaRepository<Reply, Long>{
    fun findAllByPosts(posts: Posts): List<Reply>
}