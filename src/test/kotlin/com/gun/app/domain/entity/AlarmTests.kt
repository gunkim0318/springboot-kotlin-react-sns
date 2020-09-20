package com.gun.app.domain.entity

import com.gun.app.domain.repository.AlarmRepository
import junit.framework.Assert.assertEquals
import junit.framework.Assert.assertFalse
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AlarmTests {
    @Autowired
    val alarmRepository: AlarmRepository? = null

    @Test
    fun 입력_테스트(){
        alarmRepository?.save(Alarm(null,
                "알림 테스트",
                false
        ))

        val alarm: Alarm? = alarmRepository?.findAll()?.get(0)

        print(alarm )
        if (alarm != null) {
            assertEquals(alarm.contents, "알림 테스트")
            assertFalse(alarm.readYn)
        }
    }
}