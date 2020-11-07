package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Reply(
        @Column(nullable = false)
        var contents: String,
        @ManyToOne
        @JoinColumn(name="user_id")
        var user: User,
        @ManyToOne
        @JoinColumn(name="posts_id")
        var posts: Posts
): BaseTimeEntity(){
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null

        fun modifyContents(contents: String){
                this.contents = contents
        }
}