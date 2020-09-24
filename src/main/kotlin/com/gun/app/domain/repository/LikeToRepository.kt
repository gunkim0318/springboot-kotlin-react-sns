package com.gun.app.domain.repository

import com.gun.app.domain.entity.LikeTo
import org.springframework.data.jpa.repository.JpaRepository

interface LikeToRepository : JpaRepository<LikeTo, Long>