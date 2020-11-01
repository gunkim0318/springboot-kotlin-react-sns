package com.gun.app.domain.repository

import com.gun.app.domain.entity.Likes
import org.springframework.data.jpa.repository.JpaRepository

interface LikesRepository: JpaRepository<Likes, Long>