package com.gun.app.service.impl

import com.gun.app.domain.entity.Likes
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.LikesRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.PostsRequestDto
import com.gun.app.dto.PostsResponseDto
import com.gun.app.service.PostsService
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.lang.IllegalArgumentException
import kotlin.streams.toList

@Service
class PostsServiceImpl(
        private val userRepository: UserRepository,
        private val postsRepository: PostsRepository
): PostsService {

    @Transactional(readOnly = true)
    override fun getPostsList(): List<PostsResponseDto> {
        return postsRepository.findAll().stream().map { posts -> PostsResponseDto(posts) }.toList()
    }

    @Transactional
    override fun createPosts(dto: PostsRequestDto) {
        val name: String = "gunkim"
        val user: User = userRepository.findByName(name)
                .orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }

        postsRepository.save(dto.toEntity(user))
    }
    @Transactional
    override fun increaseLike(id: Long) {
        val name = "gunkim"
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }
        val posts: Posts = postsRepository.findById(id).orElseThrow { IllegalArgumentException("잘못된 posts Id : $id") }
        posts.addLikes(Likes(user, posts))
    }
    override fun modifiedPosts(dto: PostsRequestDto) {
        val name: String = "gunkim"
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }
        val posts: Posts = postsRepository.findById(dto.id!!).orElseThrow { IllegalArgumentException("잘못된 posts Id : ${dto.id}") }

        if(user == posts.user){
            posts.contents = dto.contents
            postsRepository.save(posts)
        }
    }

    @Transactional
    override fun deletePosts(id: Long) {
        val name: String = "gunkim"
//        val user: User = userRepository.findByName(name)
//                .orElseThrow{IllegalArgumentException("잘못된 이름 : $name")}
        postsRepository.deleteById(id)
    }
}