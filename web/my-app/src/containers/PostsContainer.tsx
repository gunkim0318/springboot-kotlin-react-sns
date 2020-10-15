import React from "react";
import { useDispatch } from "react-redux";
import { increasePostsLikesAsync } from "../modules/likes";
import {Posts} from "../apis/posts";
import PostsItem from '../components/Posts';

type PostsContainerProps = {
    posts: Posts
}
const PostsContainer = ({posts}: PostsContainerProps) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(increasePostsLikesAsync.request(posts.id));
    };
    return (
        <PostsItem id={posts.id} contents={posts.contents} likes={posts.likes} username={posts.username} onClick={onClick}/>
    );
};

export default PostsContainer;
