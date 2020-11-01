package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Alarm(
        @Column(nullable = false)
        var contents: String,
        @Column(nullable = false)
        var readYn: Boolean,
        @ManyToOne
        @JoinColumn(name="user_id")
        var user: User
): BaseTimeEntity(){
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null

        init {
                this.user.alarmList.add(this)
        }
}