package com.gun.app.domain.entity

import com.gun.app.domain.Role
import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class User(
        @Column(nullable = false)
        var name: String,
        var email: String?,
        @Column(nullable = false)
        var role: Role
): BaseTimeEntity() {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null
        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
        var postsList: MutableList<Posts> = ArrayList<Posts>()
        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
        var replyList: MutableList<Reply> = ArrayList<Reply>()
        @OneToOne(mappedBy = "user")
        var profile: Profile? = null
        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
        var alarmList: MutableList<Alarm> = ArrayList<Alarm>()
        @OneToOne(mappedBy = "user")
        var likes: Likes? = null

        fun modifyName(name: String){
                this.name = name
        }
        fun modifyEmail(email: String){
                this.email = email
        }
        fun modifyRole(role: Role){
                this.role = role
        }
}