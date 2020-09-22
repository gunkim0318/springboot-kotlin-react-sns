package com.gun.app.domain.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.service.PostsService
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class PostsServiceTests{
    @Autowired
    val postsService: PostsService? = null
    @Autowired
    val postsRepository: PostsRepository? = null
    @Autowired
    val userRepository: UserRepository? = null

    @Before
    fun setup(){
        postsRepository?.deleteAll()
        userRepository?.deleteAll()

        var user: User = User(null,
                "adminMan",
                "gunkim0318@gmail.com",
                Role.ADMIN
        )
        userRepository?.save(user)

        postsRepository?.save(Posts(null,
                "게시글 내용",
                user
        ))
    }

    @Test
    fun deletePostsTest(){
        var userName: String? = userRepository?.findAll()?.get(0)?.name
        var postsId: Long? = postsRepository?.findAll()?.get(0)?.id

        if (postsId != null && userName != null) {
            postsService?.deletePosts(userName, postsId)
        }

        assertEquals(postsRepository?.findAll()?.size, 0)
    }
}