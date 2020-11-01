package com.gun.app.domain.repository

import com.gun.app.domain.entity.Alarm
import org.springframework.data.jpa.repository.JpaRepository

interface AlarmRepository: JpaRepository<Alarm, Long>