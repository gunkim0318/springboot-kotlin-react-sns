package com.gun.app.domain.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.LikeToRepository
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
import org.springframework.transaction.annotation.Transactional

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest
class PostsServiceTests{
    @Autowired
    val postsService: PostsService? = null
    @Autowired
    val postsRepository: PostsRepository? = null
    @Autowired
    val userRepository: UserRepository? = null
    @Autowired
    val likeToRepository: LikeToRepository? = null

    @Before
    fun setup(){
        postsRepository?.deleteAll()
        userRepository?.deleteAll()

        val user: User = User(null,
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
        val userName: String? = userRepository?.findAll()?.get(0)?.name
        val postsId: Long? = postsRepository?.findAll()?.get(0)?.id

        if (postsId != null && userName != null) {
            postsService?.deletePosts(userName, postsId)
        }

        assertEquals(postsRepository?.findAll()?.size, 0)
    }
    @Test
    @Transactional
    fun increaseLikeTest(){
        val postsId: Long? = postsRepository?.findAll()?.get(0)?.id
        val name = "adminMan"

        if (postsId != null) {
            postsService?.increaseLike(name, postsId)
        }
        val posts = postsRepository?.findAll()?.get(0)
        val likes = likeToRepository?.findAll()?.get(0)

        assertEquals(posts?.likeTos?.size, 1)
        assertEquals(likes?.posts?.likeTos?.size, 1)
        assertEquals(likes?.user?.name, "adminMan")
    }
}