package com.gun.app.domain

enum class Role(val title:String, val value:String) {
    USER("일반 사용자", "ROLE_USER"),
    ADMIN("관리자", "ROLE_ADMIN")
}