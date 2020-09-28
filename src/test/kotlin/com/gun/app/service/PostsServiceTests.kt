package com.gun.app.service

import com.gun.app.domain.Role
import com.gun.app.domain.entity.Posts
import com.gun.app.domain.entity.User
import com.gun.app.domain.repository.LikeToRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
import com.gun.app.dto.PostsRequestDto
import junit.framework.Assert.assertEquals
import junit.framework.Assert.fail
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.transaction.annotation.Transactional
import java.lang.IllegalArgumentException

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

    val userName = "adminMan"
    @Before
    fun setup(){
        postsRepository?.deleteAll()
        userRepository?.deleteAll()

        val user: User = User(null,
                userName,
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
    fun 게시글_입력_테스트(){
        val inContents = "게시글 입력 테스트"
        val dto: PostsRequestDto = PostsRequestDto(null, inContents)

        postsService!!.createPosts(userName, dto)

        val posts: Posts = postsRepository!!.findAll().get(1)
        assertEquals(posts.contents, inContents)
    }
    @Test
    fun 게시글_삭제_테스트(){
        val postsId: Long = postsRepository!!.findAll().get(0).id!!

        postsService?.deletePosts(userName, postsId)

        assertEquals(postsRepository?.findAll()?.size, 0)
    }
    @Test
    fun 게시글_수정_테스트(){
        val postsId: Long = postsRepository!!.findAll().get(0).id!!

        postsService?.modifiedPosts(userName, PostsRequestDto(postsId, "수정된 게시글 내용"))

        val posts: Posts = postsRepository!!.findAll().get(0)
        assertEquals(posts.contents, "수정된 게시글 내용")
    }
    @Test
    @Transactional
    fun 좋아요_증가_테스트(){
        val postsId: Long = postsRepository!!.findAll().get(0).id!!

        postsService?.increaseLike(userName, postsId)

        val posts = postsRepository?.findAll()?.get(0)
        val likes = likeToRepository?.findAll()?.get(0)

        assertEquals(posts?.likeTos?.size, 1)
        assertEquals(likes?.posts?.likeTos?.size, 1)
        assertEquals(likes?.user?.name, userName)
    }
    @Test
    @Transactional
    fun 좋아요_중복_방지_테스트(){
        val postsId: Long = postsRepository!!.findAll().get(0).id!!

        try{
            postsService!!.increaseLike(userName, postsId)
            postsService!!.increaseLike(userName, postsId)
        }catch(e: IllegalArgumentException){
            print("중복 입력 테스트 성공")
            return
        }
        fail("좋아요 중복 입력 오류")
    }
}