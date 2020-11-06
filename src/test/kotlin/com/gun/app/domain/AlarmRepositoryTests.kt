package com.gun.app.domain

import com.gun.app.domain.entity.Alarm
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.AlarmRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.*
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@DataJpaTest
class AlarmRepositoryTests {
    @Autowired
    private lateinit var alarmRepository: AlarmRepository
    @Autowired
    private lateinit var userRepository: UserRepository

    @Before
    fun setup(){
        val user: User = User(
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository.save(user)
        val alarm: Alarm = Alarm(
                "알림 내용",
                user
        )
        alarmRepository.save(alarm)
    }
    @Test
    fun insertTest(){
        val alarm: Alarm = alarmRepository.findAll()[0]

        assertEquals("알림 내용", alarm.contents)
        assertFalse(alarm.readYn)
    }
    @Test
    fun updateTest(){
        val alarm: Alarm = alarmRepository.findAll()[0]
        alarm.contents = "수정된 알림 내용"
        alarm.readYn = true

        assertEquals("수정된 알림 내용", alarm.contents)
        assertTrue(alarm.readYn)
    }
    @Test
    fun deleteTest(){
        val alarm: Alarm = alarmRepository.findAll()[0]
        alarmRepository.delete(alarm)

        val alarmListSize: Int = alarmRepository.findAll().size
        assertEquals(0, alarmListSize)
    }
}