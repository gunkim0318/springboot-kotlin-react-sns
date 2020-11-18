import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsList } from "../components/PostsList";
import { RootState } from "../modules";
import { getPostsListAsync } from "../modules/postsList";

const PostsListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsListAsync.request());
  }, [dispatch]);

  const { data: postsList, loading, error } = useSelector(
    (state: RootState) => state.postsList
  );

  return <PostsList postsList={postsList} loading={loading} error={error} />;
};

export default PostsListContainer;
