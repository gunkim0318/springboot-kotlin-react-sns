package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Posts(@Id
            @Column(nullable = false)
            var contents: String,
            @ManyToOne
            @JoinColumn(name="user_id")
            var user: User,
            @OneToMany(mappedBy = "posts")
            var replyList: List<Reply>,
            @OneToMany(mappedBy = "posts")
            var likesList: Set<Likes>
) : BaseTimeEntity(){
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null
}