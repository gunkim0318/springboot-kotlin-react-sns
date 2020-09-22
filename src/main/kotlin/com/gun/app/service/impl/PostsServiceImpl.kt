package com.gun.app.service.impl

import com.gun.app.domain.entity.User
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
        val postsRepository: PostsRepository
): PostsService {
    override fun getPostsList(name: String): List<PostsResponseDto> {
        TODO("Not yet implemented")
    }

    override fun increaseLike(name: String, id: Long) {
    }

    override fun modifiedPosts(name: String, dto: PostsRequestDto) {
        TODO("Not yet implemented")
    }

    @Transactional
    override fun deletePosts(name: String, id: Long) {
        var user: User = userRepository.findByName(name).get()
        postsRepository.deleteByIdAndUser(id, user)
    }
}