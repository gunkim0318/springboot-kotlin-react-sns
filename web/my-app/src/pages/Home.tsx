import React from "react";
import DefaultInput from "../components/atoms/DefaultInput";
import Header from "../components/organisms/Header";
import PostsListTemplate from "../components/PostsListTemplate";
import PostsListContainer from "../containers/PostsListContainer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PostsListTemplate form={<DefaultInput />}>
        <PostsListContainer />
      </PostsListTemplate>
    </>
  );
};

export default Home;
