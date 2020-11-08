package com.gun.app.domain

import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import junit.framework.Assert.assertEquals
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
class PostsRepositoryTests {
    @Autowired
    private lateinit var postsRepository: PostsRepository
    @Autowired
    private lateinit var userRepository: UserRepository

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
                "게시글 내용",
                user
        )
        postsRepository.save(posts)
    }
    @Test
    fun insertPostsTest(){
        val posts: Posts = postsRepository.findAll()[0]

        assertEquals("게시글 내용", posts.contents)
    }
    @Test
    fun updatePostsTest(){
        val posts: Posts = postsRepository.findAll()[0]
        posts.modifyContents("수정된 내용")
        postsRepository.save(posts)

        val findPosts: Posts = postsRepository.findAll()[0]
        assertEquals("수정된 내용", findPosts.contents)
    }
    @Test
    fun deletePostsTest(){
        val posts: Posts = postsRepository.findAll()[0]
        postsRepository.delete(posts)

        val postsListSize: Int = postsRepository.findAll().size
        assertEquals(postsListSize, 0)
    }
    @Test
    fun insertLikesTest(){
        val posts: Posts = postsRepository.findAll()[0]


        val user: User = userRepository.findAll()[0]
        posts.addLikes(user)

        val findPosts: Posts = postsRepository.findAll()[0]
        assertThat(findPosts.likes.size, `is`(1))
    }
    @Test
    fun deleteLikesTest(){
        val posts: Posts = postsRepository.findAll()[0]
        posts.likes.clear()

        val findPosts: Posts = postsRepository.findAll()[0]
        assertThat(findPosts.likes.size, `is`(0))
    }
}