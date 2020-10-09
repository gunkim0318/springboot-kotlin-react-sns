import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "../components/PostsList";
import { RootState } from "../modules";
import { getPostsListAsync } from "../modules/posts/actions";

const PostsListContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.postsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsListAsync.request());
  }, [dispatch]);

  return (
    <>
      <PostsList data={data} loading={loading} error={error} />
    </>
  );
};

export default PostsListContainer;
