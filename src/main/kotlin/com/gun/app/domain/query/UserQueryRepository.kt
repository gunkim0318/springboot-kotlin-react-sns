package com.gun.app.domain.query

import com.gun.app.domain.entity.QAlarm
import com.gun.app.domain.entity.QUser
import com.gun.app.domain.entity.User
import com.querydsl.core.types.dsl.BooleanExpression
import com.gun.app.domain.entity.QUser.user as qUser
import com.querydsl.jpa.impl.JPAQueryFactory
import org.springframework.stereotype.Repository
import org.springframework.util.ObjectUtils

@Repository
class UserQueryRepository(
        private val jpaQueryRepository: JPAQueryFactory
) {
    fun findByFollowers(name: String): List<User> {
        val follower = QUser("follower")

        return jpaQueryRepository
                .select(follower)
                .from(qUser, follower)
                .where(qUser.followers.contains(follower).and(eqUserName(name)))
                .fetch()
    }
    fun findByFollowing(name: String): List<User> {
        val following = QUser("following")

        return jpaQueryRepository
                .select(following)
                .from(qUser, following)
                .where(qUser.following.contains(following).and(eqUserName(name)))
                .fetch()
    }
    private fun eqUserName(userName: String): BooleanExpression? {
        if(ObjectUtils.isEmpty(userName)){
            return null
        }
        return qUser.name.eq(userName)
    }
}