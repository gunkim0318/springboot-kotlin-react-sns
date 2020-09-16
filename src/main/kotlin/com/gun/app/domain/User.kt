package com.gun.app.domain

import javax.persistence.*

class User(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long?,
        @Column(nullable = false, length = 10)
        var name: String,
        @Column(nullable = true, length = 20)
        var email: String?,
        @Column(nullable = false)
        var role: Role
) {
        fun update(name:String, email:String, role:Role){
                this.name = name
                this.email = email
                this.role = role
        }

        override fun toString(): String {
                return "User(id=$id, name=$name, email=$email, role=$role)"
        }
}