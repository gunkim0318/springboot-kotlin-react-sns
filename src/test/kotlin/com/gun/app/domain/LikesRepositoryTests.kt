package com.gun.app.domain

import com.gun.app.domain.entity.Likes
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.LikesRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@DataJpaTest
class LikesRepositoryTests {
    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var postsRepository: PostsRepository
    @Autowired
    private lateinit var likesRepository: LikesRepository

    @Before
    fun setup(){
        userRepository.deleteAll()

        val user: User = User(
                "gunkim",
                "gunkim0318@gmail.com",
                Role.USER
        )
        userRepository.save(user)
        val posts: Posts = Posts(
                "Hello! Posts!",
                user
        )
        postsRepository.save(posts)
        val likes: Likes = Likes(
                posts,
                user
        )
        likesRepository.save(likes)
    }
    @Test
    fun insertTest(){
        val likesListSize: Int = likesRepository.findAll().size
        val postsLikesSize: Int = postsRepository.findAll()[0].likesList.size
        val userLikesSize: Int = userRepository.findAll()[0].likesList.size

        assertEquals(1, likesListSize)
        assertEquals(1, postsLikesSize)
        assertEquals(1, userLikesSize)
    }
}