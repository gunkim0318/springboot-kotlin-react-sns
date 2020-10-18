package com.gun.app.service.impl

import com.gun.app.domain.entity.LikeTo
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.LikeToRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.PostsRequestDto
import com.gun.app.dto.PostsResponseDto
import com.gun.app.service.PostsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.lang.IllegalArgumentException
import java.util.*
import kotlin.streams.toList

@Service
class PostsServiceImpl(
        private val userRepository: UserRepository,
        private val postsRepository: PostsRepository,
        private val likeToRepository: LikeToRepository
): PostsService {

    override fun getPostsList(name: String): List<PostsResponseDto> {
        return postsRepository.findAll().stream().map { posts -> PostsResponseDto(posts) }.toList()
    }

    override fun createPosts(name: String, dto: PostsRequestDto) {
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }

        postsRepository.save(Posts(null,
                dto.contents,
                user
                ))
    }
    override fun increaseLike(name: String, id: Long) {
        val posts: Posts = postsRepository.findById(id).orElseThrow { IllegalArgumentException("잘못된 posts Id : $id") }
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }

        val liked: LikeTo = likeToRepository.findByPostsAndUser(posts, user).orElseGet {
            val likeTo: LikeTo = LikeTo(
                    null,
                    posts,
                    user
            )
            likeToRepository.save(likeTo)
        };
        likeToRepository.save(liked)
    }

    override fun modifiedPosts(name: String, dto: PostsRequestDto) {
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }
        val posts: Posts = postsRepository.findByIdAndUser(dto.id!!, user).orElseThrow { IllegalArgumentException("잘못된 posts Id : ${dto.id}") }
        posts.contents = dto.contents
        postsRepository.save(posts)
    }

    @Transactional
    override fun deletePosts(name: String, id: Long) {
        val user: User = userRepository.findByName(name)
                .orElseThrow{IllegalArgumentException("잘못된 이름 : $name")}

        postsRepository.deleteByIdAndUser(id, user)
    }
}