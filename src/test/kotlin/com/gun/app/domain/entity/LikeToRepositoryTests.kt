package com.gun.app.domain.entity

import com.gun.app.domain.Role
import com.gun.app.domain.repository.LikeToRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.assertEquals
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.transaction.annotation.Transactional

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class LikeToRepositoryTests {
    @Autowired
    val postsRepository: PostsRepository? = null
    @Autowired
    val userRepository: UserRepository? = null
    @Autowired
    val likeToRepository: LikeToRepository? = null

    @Test
    fun insertTest(){
        val user: User = User(null,
                "adminMan",
                "gunkim0318@gmail.com",
                Role.ADMIN
        )
        userRepository?.save(user)

        val likeTo = LikeTo(null,
                null,
                user)
        likeToRepository?.save(likeTo)

        val findLikeTo: LikeTo? = likeToRepository?.findAll()?.get(0)
        assertEquals(findLikeTo?.user?.name, "adminMan")
        assertEquals(findLikeTo?.user?.email, "gunkim0318@gmail.com")
        assertEquals(findLikeTo?.user?.role, Role.ADMIN)
    }
}