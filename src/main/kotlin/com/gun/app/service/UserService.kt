package com.gun.app.service

import com.gun.app.service.dto.PeopleResponseDto

interface UserService {
    fun getFollowers(name: String): List<PeopleResponseDto>
    fun getFollowing(name: String): List<PeopleResponseDto>
}