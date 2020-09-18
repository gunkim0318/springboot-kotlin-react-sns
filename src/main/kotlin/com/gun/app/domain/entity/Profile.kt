package com.gun.app.domain.entity

import com.gun.app.domain.entity.BaseTimeEntity
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Profile(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long,
        var image: String,
        var info1: String,
        var info2: String,
        var info3: String
) : BaseTimeEntity()