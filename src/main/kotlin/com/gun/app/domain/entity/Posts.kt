package com.gun.app.domain.entity

import java.util.*
import javax.persistence.*
import kotlin.collections.ArrayList

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
        var likeTos: MutableList<LikeTo> = ArrayList<LikeTo>()
): BaseTimeEntity(){
        fun addLikeTo(likeTo: LikeTo){
                this.likeTos.add(likeTo)
        }

        override fun toString(): String {
                return "Posts[id=$id, content=$contents, user=$user, likeTos=$likeTos]"
        }
}