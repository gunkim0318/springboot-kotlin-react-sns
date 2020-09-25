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
        val likeTo: LikeTo = LikeTo(
                null,
                postsRepository.findById(id).get(),
                userRepository.findByName(name).get()
        )
        likeToRepository.save(likeTo)
    }

    override fun modifiedPosts(name: String, dto: PostsRequestDto) {
        TODO("Not yet implemented")
    }

    @Transactional
    override fun deletePosts(name: String, id: Long) {
        val user: User = userRepository.findByName(name).get()
        postsRepository.deleteByIdAndUser(id, user)
    }
}