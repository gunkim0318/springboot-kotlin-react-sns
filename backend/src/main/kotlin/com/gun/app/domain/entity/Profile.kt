package com.gun.app.domain.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Profile(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,
        var image: String? = null,
        var info: String? = null,
        var nickname: String? = null,
        @OneToOne
        @JoinColumn(name="user_id")
        var user: User
) : BaseTimeEntity(){
        init {
                this.user.profile = this
        }
        fun modifyProfile(image: String?, nickname: String?, info: String?){
                this.image = image
                this.nickname = nickname
                this.info = info
        }
        override fun toString(): String {
                return "Profile[id=$id, image=$image, info=$info, username=${user.name}]"
        }
}