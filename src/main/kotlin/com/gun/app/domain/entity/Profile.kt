package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Profile(
        var image: String?,
        var info: String?,
        @OneToOne
        @JoinColumn(name="user_id")
        var user: User
) : BaseTimeEntity(){
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null
}