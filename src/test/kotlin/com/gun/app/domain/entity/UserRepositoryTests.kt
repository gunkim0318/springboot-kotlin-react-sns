package com.gun.app.domain.entity

import com.gun.app.domain.Role
import com.gun.app.domain.repository.AlarmRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.assertEquals
import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class UserRepositoryTests {
    @Autowired
    private val userRepository: UserRepository? = null

    @Test
    fun 입력_테스트(){
        userRepository?.save(User(null,
                "adminMan",
                "gunkim0318@gmail.com",
                Role.ADMIN
        ))

        val user: User? = userRepository?.findAll()?.get(0)

        assertEquals(user?.name, "adminMan")
        assertEquals(user?.email, "gunkim0318@gmail.com")
        assertEquals(user?.role, Role.ADMIN)
    }
}