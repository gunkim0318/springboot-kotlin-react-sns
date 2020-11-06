package com.gun.app.dto

import com.gun.app.domain.entity.Alarm

class AlarmResponseDto(alarm: Alarm) {
    val contents: String = alarm.contents
    val readYn: Boolean = alarm.readYn
}