package com.gun.app.domain.repository

import com.gun.app.domain.entity.Profile
import org.springframework.data.jpa.repository.JpaRepository

interface ProfileRepository : JpaRepository<Profile, Long>