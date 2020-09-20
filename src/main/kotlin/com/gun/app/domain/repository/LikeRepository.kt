package com.gun.app.domain.repository

import com.gun.app.domain.entity.Like
import org.springframework.data.jpa.repository.JpaRepository

interface LikeRepository : JpaRepository<Like, Long>