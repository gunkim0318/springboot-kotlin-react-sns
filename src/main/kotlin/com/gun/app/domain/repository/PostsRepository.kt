package com.gun.app.domain.repository

import com.gun.app.domain.entity.Posts
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PostsRepository: JpaRepository<Posts, Long>