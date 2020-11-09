package com.gun.app.service.impl

import com.gun.app.domain.entity.Profile
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.ProfileRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.ProfileRequestDto
import com.gun.app.dto.ProfileResponseDto
import com.gun.app.service.ProfileService
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException

@Service
class ProfileServiceImpl(
        private val profileRepository: ProfileRepository,
        private val userRepository: UserRepository
): ProfileService {
    override fun getProfile(name: String): ProfileResponseDto{
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("해당 유저 ${name}를 찾을 수 없습니다.") }
        val profile: Profile = profileRepository.findByUser(user).orElseThrow { IllegalArgumentException("해당 유저 ${name}의 프로필을 찾을 수 없습니다.") }
        return ProfileResponseDto(profile)
    }

    override fun createProfile(dto: ProfileRequestDto) {
        val name: String = "gunkim"
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("해당 유저 ${name}를 찾을 수 없습니다.") }

        val profile: Profile = dto.toEntity(user)
        profileRepository.save(profile)
    }

    override fun modifiedProfile(dto: ProfileRequestDto) {
        val name: String = "gunkim"
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("해당 유저 ${name}를 찾을 수 없습니다.") }
        val profile: Profile = profileRepository.findByUser(user).orElseThrow { IllegalArgumentException("해당 유저 ${name}의 프로필을 찾을 수 없습니다.") }

        profile.modifyProfile(dto.image, dto.info)
        profileRepository.save(profile)
    }
}