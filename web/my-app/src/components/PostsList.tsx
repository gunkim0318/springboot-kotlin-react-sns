import React from "react";
import { Posts } from "../apis/posts";
import PostsContainer from "../containers/PostsContainer";

type PostsListProps = {
  data: Posts[] | null;
  loading: Boolean;
  error: Boolean | any;
};

const PostsList = ({ data, loading, error }: PostsListProps) => {
  if(loading){
    return (<div>게시글을 불러오는 중입니다...</div>)
  }
  if(error){
    return (<div>게시글을 불러오는데 실패했습니다. 잠시 후 다시시도해주세요.</div>)
  }
  return (
    <>
      {data?.map((posts) => (
        <PostsContainer posts={posts}/>
      ))}
    </>
  );
};

export default PostsList;
