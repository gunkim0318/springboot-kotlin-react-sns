import React from "react";
import Header from "../components/organisms/Header";
import PostsListTemplate from "../components/PostsListTemplate";
import { PostsInputContainer } from "../containers/PostsInputContainer";
import PostsListContainer from "../containers/PostsListContainer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PostsListTemplate form={<PostsInputContainer />}>
        <PostsListContainer />
      </PostsListTemplate>
    </>
  );
};

export default Home;
