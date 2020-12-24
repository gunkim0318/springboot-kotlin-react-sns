package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Alarm
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.AlarmRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert
import junit.framework.Assert.assertFalse
import junit.framework.Assert.assertTrue
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.transaction.annotation.Transactional
import java.util.stream.IntStream

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class AlarmServiceTests {
    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var alarmRepository: AlarmRepository
    @Autowired
    private lateinit var alarmService: AlarmService

    @Before
    fun setup(){
        userRepository.deleteAll()

        val user: User = User(
                name = "gunkim",
                email = "gunkim0318@gmail.com",
                role = Role.ADMIN
        )
        userRepository.save(user)

        val alarm: Alarm = Alarm(
                contents = "알림 테스트",
                user = user
        )
        alarmRepository.save(alarm)
    }
    @Test
    @Transactional
    fun getAlarmListTest(){
        val user: User = userRepository.findAll()[0]

        IntStream.rangeClosed(1, 20).forEach { i ->
            val alarm: Alarm = Alarm(
                    contents = "알림 테스트 $i",
                    user = user
            )
            alarmRepository.save(alarm)
        }
        val alarmListSize: Int = alarmService.getAlarmList().size
        println("alarm list :: $alarmListSize")
    }
    @Test
    fun modifiedReadAlarm(){
        val alarmId: Long = alarmRepository.findAll()[0].id!!
        alarmService.modifiedReadAlarm(alarmId)

        val alarmReadYn: Boolean = alarmRepository.findAll()[0].readYn
        assertTrue(alarmReadYn)
    }
}