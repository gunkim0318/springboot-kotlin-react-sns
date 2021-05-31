package com.gun.app.domain.query

import com.gun.app.domain.entity.QProfile.profile as qProfile
import com.gun.app.domain.entity.QUser
import com.gun.app.service.dto.PeopleResponseDto
import com.querydsl.core.types.Projections
import com.querydsl.core.types.dsl.BooleanExpression
import com.gun.app.domain.entity.QUser.user as qUser
import com.querydsl.jpa.impl.JPAQueryFactory
import org.springframework.stereotype.Repository
import org.springframework.util.ObjectUtils

@Repository
class UserQueryRepository(
        private val jpaQueryRepository: JPAQueryFactory
) {
    fun findByFollowers(name: String): List<PeopleResponseDto> {
        val qFollower = QUser("follower")

        return jpaQueryRepository
            .select(Projections.constructor(
                PeopleResponseDto::class.java,
                qFollower.name,
                qFollower.profile.image
            ))
            .from(qUser)
            .leftJoin(qUser.followers, qFollower)
            .leftJoin(qFollower.profile, qProfile)
            .leftJoin(qUser.profile, qProfile)
            .where(eqUserName(name))
            .orderBy(qUser.id.desc())
            .fetch()
    }
    fun findByFollowing(name: String): List<PeopleResponseDto> {
        val qFollowing = QUser("following")

        return jpaQueryRepository
            .select(Projections.constructor(
                PeopleResponseDto::class.java,
                qFollowing.name,
                qFollowing.profile.image
            ))
            .from(qUser)
            .leftJoin(qUser.following, qFollowing)
            .leftJoin(qFollowing.profile, qProfile)
            .where(eqUserName(name))
            .orderBy(qFollowing.id.desc())
            .fetch()
    }
    private fun eqUserName(userName: String): BooleanExpression? {
        if(ObjectUtils.isEmpty(userName)){
            return null
        }
        return qUser.name.eq(userName)
    }
}