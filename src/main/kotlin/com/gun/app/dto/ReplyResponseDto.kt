package com.gun.app.dto

import com.gun.app.domain.entity.Reply

class ReplyResponseDto {
    var contents: String

    constructor(reply: Reply){
        this.contents = reply.contents
    }
}