package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Likes(
        @ManyToOne
        @JoinColumn(name="posts_id")
        var posts: Posts,
        @OneToOne
        @JoinColumn(name="user_id")
        var user: User
): BaseTimeEntity(){
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null
}