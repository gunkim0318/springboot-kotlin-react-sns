package com.gun.app.domain.entity

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import java.util.*
import javax.persistence.*
import kotlin.collections.ArrayList

@Entity
class Posts(@Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            var id: Long?,
            var contents: String,
            @ManyToOne
            @JoinColumn(name="user_id")
            var user: User,
            @OneToMany(mappedBy = "posts", fetch = FetchType.LAZY)
            var likeTos: MutableList<LikeTo> = ArrayList<LikeTo>()
) : BaseTimeEntity() {
        fun addLikeTo(likeTo: LikeTo){
                this.likeTos.add(likeTo)
        }

        override fun toString(): String {
                return "Posts[id=$id, content=$contents, user=$user, likeTos=$likeTos]"
        }
}