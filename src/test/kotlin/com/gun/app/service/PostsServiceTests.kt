package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.web.dto.PostsRequestDto
import junit.framework.Assert.assertEquals
import org.hamcrest.CoreMatchers.`is`
import org.junit.Assert.assertThat
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
    private lateinit var postsService: PostsService
    @Autowired
    private lateinit var postsRepository: PostsRepository
    @Autowired
    private lateinit var userRepository: UserRepository

    private val userName = "gunkim"
    @Before
    fun setup(){
        userRepository.deleteAll()

        val user = User(
                name = userName,
                email = "gunkim0318@gmail.com",
                role = Role.ADMIN
        )
        userRepository.save(user)

        val posts = Posts(
                contents = "게시글 내용",
                user = user
        )
        postsRepository.save(posts)
    }
    @Test
    fun createPostsTest(){
        postsRepository.deleteAll()

        val contents = "게시글 테스트입니다."
        val dto = PostsRequestDto(
                contents = contents
        )
        postsService.createPosts(dto)
        val findPosts: Posts = postsRepository.findAll()[0]
        assertEquals(contents, findPosts.contents)
    }
    @Test
    fun deletePostsTest(){
        val postsId: Long = postsRepository.findAll()[0].id!!
        postsService.deletePosts(postsId)
        val postsSize: Int = postsRepository.findAll().size
        assertEquals(postsSize, 0)
    }
    @Test
    @Transactional
    fun increaseLikeTest(){
        val postsId: Long = postsRepository.findAll()[0].id!!
        postsService.increaseLike(postsId)
        postsService.increaseLike(postsId)
        postsService.increaseLike(postsId)

        val findPosts: Posts = postsRepository.findAll()[0]

        assertThat(findPosts.likes.size, `is`(1))
    }
    @Test
    fun modifiedPostsTest(){
        val postsId: Long = postsRepository.findAll()[0].id!!
        val contents = "수정된 게시글 내용입니다."
        val dto = PostsRequestDto(
                postsId,
                contents
        )

        postsService.modifyPosts(dto)
    }
}