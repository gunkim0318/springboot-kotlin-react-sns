package com.gun.app.domain.repository

import com.gun.app.domain.entity.People
import org.springframework.data.jpa.repository.JpaRepository

interface PeopleRepository : JpaRepository<People, Long>