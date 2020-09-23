package com.gun.app.domain.entity

import com.gun.app.domain.Role
import com.gun.app.domain.repository.LikeRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.assertEquals
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class PostsRepositoryTests {
    @Autowired
    private val likeRepository: LikeRepository? = null
    @Autowired
    val postsRepository: PostsRepository? = null
    @Autowired
    val userRepository: UserRepository? = null

    @Test
    fun insertTest(){
        val user: User = User(null,
                "adminMan",
                "gunkim0318@gmail.com",
                Role.ADMIN
        )
        userRepository?.save(user)

        postsRepository?.save(Posts(null,
                "게시글 내용",
                user,
                null
        ))

        val posts: Posts? = postsRepository?.findAll()?.get(0)
        assertEquals(posts?.contents, "게시글 내용")
        assertEquals(posts?.user?.name, "adminMan")
    }
}