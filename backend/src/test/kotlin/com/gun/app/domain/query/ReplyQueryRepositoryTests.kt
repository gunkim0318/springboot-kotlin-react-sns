package com.gun.app.domain.query

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class ReplyQueryRepositoryTests {
    @Autowired
    private lateinit var replyQueryRepository: ReplyQueryRepository

    @Test
    fun test(){
        println(replyQueryRepository.findAllByPostsId(1))
    }
}