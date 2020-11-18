import React from "react";
import { Posts } from "../apis/posts";
import PostsContainer from "../containers/PostsContainer";

type PostsListProps = {
  postsList: Posts[] | null;
  loading: boolean;
  error: any;
};
export const PostsList = ({ postsList, loading, error }: PostsListProps) => {
  return (
    <>
      {postsList &&
        postsList.map((posts) => (
          <PostsContainer
              id={posts.id}
              name={posts.name}
              contents={posts.contents}
              likeCnt={posts.likeCnt}
              isLikes={posts.isLikes}
              creDate={posts.creDate}
          />
        ))}
    </>
  );
};
