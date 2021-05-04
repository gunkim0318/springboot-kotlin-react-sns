package com.gun.app.service.impl

import com.gun.app.domain.repository.UserRepository
import com.gun.app.service.UserService
import com.gun.app.service.dto.PeopleResponseDto
import org.springframework.stereotype.Service
import java.util.stream.Collectors.toList

@Service
class UserServiceImpl(
        private val userRepository: UserRepository
): UserService {
    override fun getFollowers(name: String): List<PeopleResponseDto> {
        val user = userRepository.findByName(name).orElseThrow{ IllegalArgumentException("잘못된 사용자입니다.") }

        return user.followers.stream().map(::PeopleResponseDto).collect(toList())
    }

    override fun getFollowing(name: String): List<PeopleResponseDto> {
        val user = userRepository.findByName(name).orElseThrow{ IllegalArgumentException("잘못된 사용자입니다.") }

        return user.following.stream().map(::PeopleResponseDto).collect(toList())
    }
}