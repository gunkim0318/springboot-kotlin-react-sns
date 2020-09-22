package com.gun.app.dto

import com.gun.app.domain.entity.Posts

class PostsResponseDto {
    var contents: String
//    var likeCnt: Int
    constructor(posts: Posts){
        this.contents = posts.contents
//        this.likeCnt = posts.likes.size
    }
}