package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import org.springframework.lang.NonNull
import java.io.Serializable
import javax.persistence.*

@Entity
@IdClass(LikesPrimaryKey::class)
class Likes(
        @Id
        @ManyToOne
        @JoinColumn(name="user_id")
        var user: User,
        @Id
        @ManyToOne
        @JoinColumn(name="posts_id")
        var posts: Posts
) : BaseTimeEntity(){
        init {
                this.posts.likesList.add(this)
        }
}