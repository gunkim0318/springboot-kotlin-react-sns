import React from "react";
import { useDispatch } from "react-redux";
import { increasePostsLikesAsync } from "../modules/likes";
import Posts from "../components/Posts";

type PostsContainerProps = {
  id: number;
  name: string;
  contents: string;
  likeCnt: number;
  isLikes: boolean;
  creDate: string;
};
const PostsContainer = ({ id, name, contents, likeCnt, isLikes, creDate }: PostsContainerProps) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(increasePostsLikesAsync.request(id));
  }

  return (
      <Posts
        id={id}
        name={name}
        contents={contents}
        likeCnt={likeCnt}
        isLikes={isLikes}
        creDate={creDate}
        onClick={onClick}
      />
  )
};

export default PostsContainer;
