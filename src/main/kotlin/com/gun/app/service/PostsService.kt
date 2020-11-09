package com.gun.app.service

import com.gun.app.dto.PostsRequestDto
import com.gun.app.dto.PostsResponseDto

interface PostsService {
    fun createPosts(dto: PostsRequestDto)
    fun getPostsList():List<PostsResponseDto>
    fun increaseLike(id: Long)
    fun modifyPosts(dto: PostsRequestDto)
    fun deletePosts(id: Long)
}