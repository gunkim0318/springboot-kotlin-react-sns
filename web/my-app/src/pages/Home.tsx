import React from "react";
import Header from "../components/Header";
import PostsList from "../components/PostsList";

const Home: React.FC = () => {
  return (
      <>
        <Header/>
        <PostsList/>
      </>
  );
};

export default Home;
