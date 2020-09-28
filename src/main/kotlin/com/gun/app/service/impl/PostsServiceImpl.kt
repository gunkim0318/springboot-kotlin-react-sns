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

@Service
class PostsServiceImpl(
        @Autowired
        val userRepository: UserRepository,
        @Autowired
        val postsRepository: PostsRepository,
        @Autowired
        val likeToRepository: LikeToRepository
): PostsService {
    override fun getPostsList(name: String): List<PostsResponseDto> {
        TODO("Not yet implemented")
    }

    override fun increaseLike(name: String, id: Long) {
        val posts: Posts = postsRepository.findById(id).orElseThrow { IllegalArgumentException("잘못된 posts Id : $id") }
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }

        val liked: Optional<LikeTo> = likeToRepository.findByPostsAndUser(posts, user);
        if(liked.isPresent){
            throw IllegalArgumentException()
        }

        val likeTo: LikeTo = LikeTo(
                null,
                posts,
                user
        )
        likeToRepository.save(likeTo)
    }

    override fun modifiedPosts(name: String, dto: PostsRequestDto) {
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }
        val posts: Posts = postsRepository.findByIdAndUser(dto.id, user).orElseThrow { IllegalArgumentException("잘못된 posts Id : ${dto.id}") }

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