package com.gun.app.domain.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Alarm(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long?,
        var contents: String,
        var readYn: Boolean
): BaseTimeEntity(){
        override fun toString(): String {
                return "Alarm[id=$id, contents=$contents, readYn=$readYn]"
        }
}