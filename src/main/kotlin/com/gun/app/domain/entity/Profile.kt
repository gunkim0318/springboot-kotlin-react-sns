package com.gun.app.domain.entity

import com.gun.app.domain.entity.BaseTimeEntity
import javax.persistence.*

@Entity
class Profile(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long?,
        var image: String?,
        var info1: String?,
        var info2: String?,
        var info3: String?,
        @OneToOne
        @JoinColumn(name="user_id")
        var user: User
) : BaseTimeEntity()