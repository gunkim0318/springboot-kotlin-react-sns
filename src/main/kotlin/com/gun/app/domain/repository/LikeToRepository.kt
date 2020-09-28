package com.gun.app.domain.repository

import com.gun.app.domain.entity.LikeTo
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface LikeToRepository : JpaRepository<LikeTo, Long>{
    fun findByPostsAndUser(posts: Posts, user: User): Optional<LikeTo>
}