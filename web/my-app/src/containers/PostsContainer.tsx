import React from "react";
import { useDispatch } from "react-redux";
import { increasePostsLikesAsync } from "../modules/likes";
import { Posts } from "../apis/posts";

type PostsContainerProps = {
  posts: Posts;
};
const PostsContainer = ({ posts }: PostsContainerProps) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(increasePostsLikesAsync.request(posts.id));
  };
};

export default PostsContainer;
