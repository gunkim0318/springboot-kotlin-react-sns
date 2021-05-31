package com.gun.app.domain.repository

import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ProfileRepository: JpaRepository<Profile, Long>{
    fun findByUser(user: User): Optional<Profile>
}