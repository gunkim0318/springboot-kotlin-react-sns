package com.gun.app.service.impl

import com.gun.app.domain.query.UserQueryRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.service.UserService
import com.gun.app.service.dto.PeopleResponseDto
import org.springframework.stereotype.Service
import java.util.stream.Collectors.toList

@Service
class UserServiceImpl(
    private val userQueryRepository: UserQueryRepository
): UserService {
    override fun getFollowers(name: String): List<PeopleResponseDto> {
        return userQueryRepository.findByFollowers(name)
    }

    override fun getFollowing(name: String): List<PeopleResponseDto> {
        return userQueryRepository.findByFollowing(name)
    }
}