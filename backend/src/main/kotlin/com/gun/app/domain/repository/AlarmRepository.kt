package com.gun.app.domain.repository

import com.gun.app.domain.entity.Alarm
import com.gun.app.domain.entity.User
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository

interface AlarmRepository: JpaRepository<Alarm, Long>{
    fun findAllByUser(user: User, pageable: Pageable): List<Alarm>
}