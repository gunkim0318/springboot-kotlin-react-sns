package com.gun.app.domain.entity

import javax.persistence.*

@Entity
class LikeTo(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long?,
        @ManyToOne
        @JoinColumn(name="posts_id")
        var posts: Posts?,
        @OneToOne
        @JoinColumn(name="user_id")
        var user: User
) : BaseTimeEntity(){
        override fun toString(): String {
                return "LikeTo[id=$id, posts=$posts, user=$user]"
        }
}