package com.gun.app.domain.repository

import com.gun.app.domain.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository: JpaRepository<User, Long>{
    fun findByName(name: String): Optional<User>
}