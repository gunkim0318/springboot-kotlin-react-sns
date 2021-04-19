package com.gun.app.service.impl

import com.gun.app.domain.entity.Alarm
import com.gun.app.domain.query.AlarmQueryRepository
import com.gun.app.domain.repository.AlarmRepository
import com.gun.app.service.dto.AlarmResponseDto
import com.gun.app.service.AlarmService
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class AlarmServiceImpl(
        private val alarmRepository: AlarmRepository,
        private val alarmQueryRepository: AlarmQueryRepository
): AlarmService{
    @Transactional(readOnly = true)
    override fun getAlarmList(): MutableList<AlarmResponseDto> {
        val name = "gunkim"
        return alarmQueryRepository.findAllByUser(name)
   }
    override fun modifiedReadAlarm(id: Long) {
        val alarm: Alarm = alarmRepository.findById(id)
                .orElseThrow { java.lang.IllegalArgumentException("해당 알람이 존재하지 않아요 :: $id") }
        alarm.modifiedReadAlarm()
        alarmRepository.save(alarm)
    }
}