import React from "react";
import { Posts as PostsType } from "../apis/posts";
import Posts from "./Posts";

type PostsListProps = {
  postsList: PostsType[] | null;
  loading: boolean;
  error: any;
};
export const PostsList = ({ postsList, loading, error }: PostsListProps) => {
  return (
    <>
      {postsList &&
        postsList.map((posts) => (
          <Posts
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
