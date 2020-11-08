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
    @OneToMany(mappedBy = "posts", cascade = [CascadeType.ALL], orphanRemoval = true)
    var replyList: MutableList<Reply> = ArrayList<Reply>()

    @ManyToMany(cascade = [CascadeType.ALL])
    @JoinTable(
            name = "LIKES_RELATIONS",
            joinColumns = [JoinColumn(name = "LIKED_ID")],
            inverseJoinColumns = [JoinColumn(name = "LIKES_ID")]
    )
    var likes: MutableSet<User> = HashSet<User>()

    fun modifyContents(contents: String){
        this.contents = contents
    }
    fun addLikes(user: User){
        this.likes.add(user)
    }

    override fun toString(): String {
        return "Posts[id=$id, contents=$contents, ...]"
    }
}