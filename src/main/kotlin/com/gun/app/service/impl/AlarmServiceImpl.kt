package com.gun.app.service.impl

import com.gun.app.domain.entity.Alarm
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.AlarmRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.AlarmResponseDto
import com.gun.app.service.AlarmService
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import kotlin.streams.toList


@Service
class AlarmServiceImpl(
        private val alarmRepository: AlarmRepository,
        private val userRepository: UserRepository
): AlarmService{
    @Transactional(readOnly = true)
    override fun getAlarmList(): List<AlarmResponseDto> {
        val name: String = "gunkim"
        val user: User = userRepository.findByName("gunkim")
                .orElseThrow { IllegalArgumentException("잘못된 이름 : $name") }

        return alarmRepository.findAllByUser(user, PageRequest.of(0, 15, Sort.Direction.DESC, "id")).stream()
                .map { alarm -> AlarmResponseDto(alarm) }.toList()

    }
    override fun modifiedReadAlarm(id: Long) {
        val alarm: Alarm = alarmRepository.findById(id)
                .orElseThrow { java.lang.IllegalArgumentException("해당 알람이 존재하지 않아요 :: $id") }
        alarm.modifiedReadAlarm()
        alarmRepository.save(alarm)
    }
}