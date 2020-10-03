import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getPostsList } from "../modules/posts";
import Posts from "./Posts";

const PostsList = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.posts.postsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsList());
  }, [dispatch]);

  return (
    <>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </>
  );
};

export default PostsList;
