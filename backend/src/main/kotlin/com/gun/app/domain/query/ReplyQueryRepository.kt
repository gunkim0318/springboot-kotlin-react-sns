package com.gun.app.domain.query

import com.gun.app.domain.entity.QUser.user as qUser
import com.gun.app.domain.entity.QPosts.posts as qPosts
import com.gun.app.domain.entity.QReply.reply as qReply
import com.gun.app.domain.entity.QProfile.profile as qProfile
import com.gun.app.domain.entity.Reply
import com.gun.app.service.dto.ReplyResponseDto
import com.querydsl.core.Tuple
import com.querydsl.core.types.Projections
import com.querydsl.jpa.impl.JPAQueryFactory
import org.springframework.stereotype.Repository

@Repository
class ReplyQueryRepository(
    private val queryFactory: JPAQueryFactory
) {
    fun findAllByPostsId(postsId: Long): MutableList<ReplyResponseDto> {
        return queryFactory
            .select(Projections.constructor(
                ReplyResponseDto::class.java,
                qReply.contents,
                qReply.user.name,
                qReply.user.profile.image
            ))
            .from(qReply)
            .innerJoin(qReply.user, qUser)
            .leftJoin(qReply.user.profile, qProfile)
            .fetch()
    }
}