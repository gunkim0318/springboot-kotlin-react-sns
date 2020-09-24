package com.gun.app.domain.entity

import com.gun.app.domain.Role
import com.gun.app.domain.repository.LikeToRepository
import com.gun.app.domain.repository.PostsRepository
import com.gun.app.domain.repository.UserRepository
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
    @Transactional
    fun insertTest(){
        val user: User = User(null,
                "adminMan",
                "gunkim0318@gmail.com",
                Role.ADMIN
        )
        userRepository?.save(user)


        var posts = Posts(null,
                "게시글 내용",
                user
        )
        val likeTo = LikeTo(null,
                null,
                user)
        likeToRepository?.save(likeTo)
        posts.addLikeTo(likeTo)
        postsRepository?.save(posts)
//        Assert.assertEquals(findPosts?.contents, "게시글 내용")
//        Assert.assertEquals(findPosts?.user?.name, "adminMan")
    }
}