import React from "react";
import { Posts } from "../apis/posts";
import PostsItem from "../components/Posts";

type PostsListProps = {
  data: Posts[] | null;
  loading: Boolean;
  error: Boolean | any;
};

const PostsList = ({ data, loading, error }: PostsListProps) => {
  return (
    <>
      {data?.map((posts) => (
        <PostsItem
          id={posts.id}
          contents={posts.contents}
          likes={posts.likes}
          username={posts.username}
        />
      ))}
    </>
  );
};

export default PostsList;
