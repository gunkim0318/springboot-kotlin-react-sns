package com.gun.app.service

import com.gun.app.dto.PostsRequestDto
import com.gun.app.dto.PostsResponseDto

interface PostsService {

    /**
     * TODO: 해당 유저에게 표출할 게시글 목록을 반환
     * */
    fun getPostsList(name: String):List<PostsResponseDto>

    /**
     * TODO: 해당 게시물의 작성자가 맞을 경우 해당 번호의 게시글 좋아요 증가
     * */
    fun increaseLike(name: String, id: Long)

    /**
     * TODO: 해당 게시물 작성자가 맞을 경우 게시물 내용 수정
     */
    fun modifiedPosts(name: String, dto: PostsRequestDto)

    /**
     * TODO: 해당 게시물의 작성자가 맞을 경우 게시물 삭제
     */
    fun deletePosts(name: String, id: Long)
}