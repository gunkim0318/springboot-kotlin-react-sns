package com.gun.app.domain.repository

import com.gun.app.dto.AlarmResponseDto
import com.querydsl.core.types.Projections
import com.querydsl.core.types.dsl.BooleanExpression
import com.gun.app.domain.entity.QAlarm.alarm as qAlarm
import com.gun.app.domain.entity.QUser.user as qUser
import com.querydsl.jpa.impl.JPAQueryFactory
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Repository
import org.springframework.util.ObjectUtils

@Repository
class AlarmQueryRepository(
    val queryFactory: JPAQueryFactory
) {
    fun findAllByUser(userName: String): MutableList<AlarmResponseDto> {
        val pageRequest = PageRequest.of(0, 10)
        return queryFactory
            .select(Projections.constructor(
                AlarmResponseDto::class.java,
                qAlarm.contents,
                qAlarm.readYn
            ))
            .from(qAlarm)
            .innerJoin(qAlarm.user, qUser)
            .where(eqUserName(userName))
            .offset(pageRequest.offset)
            .limit(pageRequest.pageSize.toLong())
            .orderBy(qAlarm.id.desc())
            .fetch()
    }
    private fun eqUserName(userName: String): BooleanExpression? {
        if(ObjectUtils.isEmpty(userName)){
            return null
        }
        return qAlarm.user.name.eq(userName)
    }
}