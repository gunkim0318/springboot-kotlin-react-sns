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

    override fun createProfile(name: String, dto: ProfileRequestDto) {
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("해당 유저 ${name}를 찾을 수 없습니다.") }

        val profile: Profile = dto.toEntity(user)
        profileRepository.save(profile)
    }

    override fun modifiedProfile(name: String, dto: ProfileRequestDto) {
        val user: User = userRepository.findByName(name).orElseThrow { IllegalArgumentException("해당 유저 ${name}를 찾을 수 없습니다.") }
        val profile: Profile = profileRepository.findByUser(user).orElseThrow { IllegalArgumentException("해당 유저 ${name}의 프로필을 찾을 수 없습니다.") }
        profile.info1 = dto.info1
        profile.info2 = dto.info2
        profile.info3 = dto.info3
        profile.image = dto.image
        profileRepository.save(profile)
    }
}