package com.gun.app.dto

import com.gun.app.domain.entity.Reply

class ReplyResponseDto(reply: Reply) {
    var contents: String = reply.contents
}