package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Alarm(
        @Column(nullable = false)
        var contents: String,
        @ManyToOne
        @JoinColumn(name="user_id")
        var user: User
): BaseTimeEntity(){
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null
        @Column(nullable = false)
        var readYn: Boolean = false

        init {
                this.user.alarmList.add(this)
        }
        fun modifiedReadAlarm(){
                this.readYn = true
        }
}