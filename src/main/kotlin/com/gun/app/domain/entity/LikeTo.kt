package com.gun.app.domain.entity

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import javax.persistence.*

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator::class, property = "id")
class LikeTo(@Id
             @GeneratedValue(strategy = GenerationType.IDENTITY)
             var id: Long?,
             @ManyToOne(fetch = FetchType.LAZY)
             @JoinColumn(name="posts_id")
             var posts: Posts?,
             @OneToOne
             @JoinColumn(name="user_id")
             var user: User
) : BaseTimeEntity() {
        init {
                this.posts?.likeTos?.add(this)
        }

        override fun toString(): String {
                return "LikeTo[id=$id, posts=$posts, user=$user]"
        }
}