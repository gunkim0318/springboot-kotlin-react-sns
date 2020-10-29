import React from "react";
import { useRef, useEffect } from "react";
import DefaultInput from "../components/DefaultInput";
import Header from "../components/Header";
import Posts from "../components/Posts";
import PostsListTemplate from "../components/PostsListTemplate";

const Home: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Header
        open={open}
        anchorRef={anchorRef}
        handleToggle={handleToggle}
        handleKeyDown={handleKeyDown}
        handleClose={handleClose}
      />
      <PostsListTemplate form={<DefaultInput />}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </PostsListTemplate>
    </>
  );
};

export default Home;
