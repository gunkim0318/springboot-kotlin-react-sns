package com.gun.app.domain.entity

import com.gun.app.domain.Role
import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,
        @OneToOne(mappedBy = "user", orphanRemoval = true)
        var profile: Profile? = null,
        @Column(nullable = false)
        var name: String,
        var email: String?,
        @Column(nullable = false)
        var role: Role
): BaseTimeEntity() {
        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = [CascadeType.REMOVE], orphanRemoval = true)
        var postsList: MutableList<Posts> = ArrayList()
        @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = [CascadeType.REMOVE], orphanRemoval = true)
        var alarmList: MutableList<Alarm> = ArrayList()

        @ManyToMany(cascade = [CascadeType.ALL])
        var followers: MutableSet<User> = HashSet()
        @ManyToMany(cascade = [CascadeType.ALL])
        var following: MutableSet<User> = HashSet()

        fun modifyName(name: String){
                this.name = name
        }
        fun modifyEmail(email: String){
                this.email = email
        }
        fun addFollowers(follower: User){
                follower.following.add(this)
                followers.add(follower)
        }
        fun addFollowing(followed: User){
                followed.addFollowers(this)
                this.following.add(followed)
        }
}