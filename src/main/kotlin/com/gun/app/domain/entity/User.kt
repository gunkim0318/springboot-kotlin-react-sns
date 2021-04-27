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
        @JoinTable(
                name = "USER_RELATIONS",
                joinColumns = [JoinColumn(name = "FOLLOWED_ID")],
                inverseJoinColumns = [JoinColumn(name = "FOLLOWER_ID")]
        )
        var followers: MutableSet<User> = HashSet()
        @ManyToMany(mappedBy = "followers")
        var following: MutableSet<User> = HashSet()

        fun modifyName(name: String){
                this.name = name
        }
        fun modifyEmail(email: String){
                this.email = email
        }
        fun modifyRole(role: Role){
                this.role = role
        }
        fun addFollowers(follower: User){
                followers.add(follower)
                follower.following.add(this)
        }
        fun addFollowing(followed: User){
                followed.addFollowers(this)
        }
        fun deletePosts(posts: Posts){
                this.postsList.remove(posts)
        }
}