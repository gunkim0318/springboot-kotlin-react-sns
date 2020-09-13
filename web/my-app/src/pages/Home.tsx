import React from "react";
import Header from "../components/Header";
import PostsInputForm from "../components/PostsInputForm";
import PostsListTemplate from "../components/PostsListTemplate";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PostsListTemplate Form={PostsInputForm} />
    </>
  );
};

export default Home;
