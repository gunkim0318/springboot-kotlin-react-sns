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
        var user: User,
        @OneToMany(mappedBy = "posts")
        var likes: List<Like>?
): BaseTimeEntity()