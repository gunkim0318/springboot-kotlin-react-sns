package com.gun.app.domain.entity

import org.springframework.lang.NonNull
import java.io.Serializable
import javax.persistence.Embeddable
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne

@Embeddable
class LikesPrimaryKey(
        @NonNull
        @ManyToOne
        @JoinColumn(name="user_id")
        var user: User,
        @NonNull
        @ManyToOne
        @JoinColumn(name="posts_id")
        var posts: Posts
): Serializable