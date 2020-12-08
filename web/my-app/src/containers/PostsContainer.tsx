import React from "react";
import { useDispatch } from "react-redux";
import { increasePostsLikesAsync } from "../modules/likes";
import Posts from "../components/molecules/Posts";
import { ReplyListContainer } from './ReplyListContainer';

type PostsContainerProps = {
  id: number;
  name: string;
  contents: string;
  likeCnt: number;
  isLikes: boolean;
  creDate: string;
  image: string;
};
const PostsContainer = ({ id, name, contents, likeCnt, isLikes, creDate, image }: PostsContainerProps) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(increasePostsLikesAsync.request(id));
  }
  return (
    <>
      <Posts
        id={id}
        name={name}
        contents={contents}
        likeCnt={likeCnt}
        isLikes={isLikes}
        creDate={creDate}
        image={image}
        onClick={onClick}
      />
      <ReplyListContainer/>
    </>
  )
};

export default PostsContainer;
