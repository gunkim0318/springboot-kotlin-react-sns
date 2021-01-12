import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { increasePostsLikesAsync } from "../modules/likes";
import Posts from "../components/molecules/Posts";
import { ReplyListContainer } from './ReplyListContainer';
import {Reply} from "../apis/reply";
import {writeReplyAsync} from "../modules/reply/actions";

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
  const onInputSubmit = (e: any) => {
    e.preventDefault()

    const contents = e.target.myValue.value
    const reply: Reply = {
      contents: contents,
      postsId: id,
      name: '',
      profileImage: ''
    }

    dispatch(writeReplyAsync.request(reply))
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
        onInputSubmit={onInputSubmit}
      />
    </>
  )
};

export default PostsContainer;
