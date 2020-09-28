package com.gun.app.domain.repository

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface PostsRepository: JpaRepository<Posts, Long>{
    fun deleteByIdAndUser(id: Long, user: User)
    fun findByIdAndUser(id: Long, user: User): Optional<Posts>
}