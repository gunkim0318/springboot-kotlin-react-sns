package com.gun.app.service

import com.gun.app.dto.PostsRequestDto
import com.gun.app.dto.PostsResponseDto

interface PostsService {
    fun createPosts(name: String, dto: PostsRequestDto)
    fun getPostsList(name: String):List<PostsResponseDto>
    fun increaseLike(name: String, id: Long)
    fun modifiedPosts(name: String, dto: PostsRequestDto)
    fun deletePosts(name: String, id: Long)
}