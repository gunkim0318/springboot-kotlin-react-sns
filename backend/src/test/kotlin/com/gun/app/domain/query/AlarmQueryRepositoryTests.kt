package com.gun.app.domain.query

import com.gun.app.domain.query.AlarmQueryRepository
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class AlarmQueryRepositoryTests {
    @Autowired
    private lateinit var alarmQueryRepository: AlarmQueryRepository

    @Test
    fun test(){
        alarmQueryRepository.findAllByUser("gunkim").stream().forEach { alarm ->
            println(alarm)
        }
    }
}