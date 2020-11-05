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
        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = [CascadeType.REMOVE], orphanRemoval = true)
        var postsList: MutableList<Posts> = ArrayList<Posts>()
        @OneToOne(mappedBy = "user", orphanRemoval = true)
        var profile: Profile? = null
        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = [CascadeType.REMOVE], orphanRemoval = true)
        var alarmList: MutableList<Alarm> = ArrayList<Alarm>()

        fun modifyName(name: String){
                this.name = name
        }
        fun modifyEmail(email: String){
                this.email = email
        }
        fun modifyRole(role: Role){
                this.role = role
        }
        fun deletePosts(posts: Posts){
                this.postsList.remove(posts)
        }
        override fun toString(): String {
                return "User[id=$id, name=$name, email=$email, role=$role, profile=$profile, postsList=$postsList]"
        }
}