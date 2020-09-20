package com.gun.app.service

interface AlarmService {
    /**
     * TODO: 해당 유저의 알림 목록 조회
     */
    fun getAlarmList(name: String)

    /**
     * TODO: 해당 유저의 해당 알림 읽음 처리
     */
    fun modifiedReadAlarm(name: String, id: Long)
}