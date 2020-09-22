package com.gun.app.domain.entity

import javax.persistence.*

@Entity
class Posts(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long?,
        var contents: String,
        @ManyToOne
        @JoinColumn(name="user_id")
        var user: User
//        @OneToMany
//        @JoinColumn(name="like_id")
//        var likes: List<Like>
): BaseTimeEntity()