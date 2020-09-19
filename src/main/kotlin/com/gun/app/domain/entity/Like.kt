package com.gun.app.domain.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Like(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long
) : BaseTimeEntity()