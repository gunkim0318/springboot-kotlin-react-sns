package com.gun.app.domain

import com.gun.app.domain.entity.Likes
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.LikesRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import org.hamcrest.CoreMatchers.`is`
import org.junit.Assert.assertThat
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
                user,
                posts
        )
        likesRepository.save(likes)
    }
    @Test
    fun insertTest(){
        val likesListSize: Int = likesRepository.findAll().size

        assertThat(likesListSize, `is`(1))
    }
    @Test
    fun deleteTest(){
        val likes: Likes = likesRepository.findAll()[0]

        likesRepository.delete(likes)

        val likesListSize: Int = likesRepository.findAll().size
        assertThat(likesListSize, `is`(0))
    }
}