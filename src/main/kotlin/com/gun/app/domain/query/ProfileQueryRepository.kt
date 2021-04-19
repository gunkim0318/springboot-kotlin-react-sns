package com.gun.app.domain.query

import com.gun.app.domain.entity.QProfile.profile as qProfile
import com.gun.app.domain.entity.QUser.user as qUser
import com.gun.app.dto.ProfileResponseDto
import com.querydsl.core.types.Projections
import com.querydsl.jpa.impl.JPAQueryFactory
import org.springframework.stereotype.Repository

@Repository
class ProfileQueryRepository(
    private val jpaQueryFactory: JPAQueryFactory
) {
    fun findByUsername(userName: String): ProfileResponseDto {
        return jpaQueryFactory
            .select(
                Projections.constructor(
                    ProfileResponseDto::class.java,
                    qProfile.image,
                    qProfile.info,
                    qProfile.nickname,
                    qProfile.user.name.`as`(userName),
                    qProfile.user.followers.size(),
                    qProfile.user.following.size()
                )
            ).from(qProfile)
            .innerJoin(qProfile.user, qUser)
            .fetchFirst()
    }
}