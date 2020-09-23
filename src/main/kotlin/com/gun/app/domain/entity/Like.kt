package com.gun.app.domain.entity

import javax.persistence.*

@Entity
class Like(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long?,
        @ManyToOne
        @JoinColumn(name="posts_id")
        var posts: Posts?,
        @OneToOne
        @JoinColumn(name="user_id")
        var user: User
) : BaseTimeEntity()