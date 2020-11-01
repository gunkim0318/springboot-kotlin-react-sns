package com.gun.app.domain.entity

import com.gun.app.domain.entity.common.BaseTimeEntity
import javax.persistence.*

@Entity
class Posts(
        @Column(nullable = false)
        var contents: String,
        @ManyToOne
        @JoinColumn(name="user_id")
        var user: User
) : BaseTimeEntity(){
    init {
        this.user.postsList.add(this)
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null
    @OneToMany(mappedBy = "posts", cascade = [CascadeType.REMOVE])
    var replyList: MutableList<Reply> = ArrayList<Reply>()
    @OneToMany(mappedBy = "posts", cascade = [CascadeType.REMOVE])
    var likesList: MutableSet<Likes> = HashSet<Likes>()

    fun modifyContents(contents: String){
        this.contents = contents
    }
}