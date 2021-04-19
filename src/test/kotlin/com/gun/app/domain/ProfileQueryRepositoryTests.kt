package com.gun.app.domain

import com.gun.app.domain.query.ProfileQueryRepository
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class ProfileQueryRepositoryTests {
    @Autowired
    private lateinit var profileQueryRepository: ProfileQueryRepository

    @Test
    fun test(){
        println(profileQueryRepository.findByUsername("gunkim"))
    }
}