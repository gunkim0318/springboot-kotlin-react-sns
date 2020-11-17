import { Avatar, Button, Grid, Paper, Typography } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import { useRef, useEffect } from "react";
import DefaultInput from "../components/atoms/DefaultInput";
import Header from "../components/organisms/Header";
import Posts from "../components/Posts";
import PostsListTemplate from "../components/PostsListTemplate";
import ReplyListTemplate from "../components/ReplyListTemplate";

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
        <Paper elevation={3} style={{ padding: "10px 0px" }}>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid>
              <Typography variant="h5">댓글</Typography>
            </Grid>
            <Grid>
              <DefaultInput />
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              style={{
                display: "inline-block",
                minWidth: "150px",
              }}
              xs={10}
            >
              <Grid>
                <Avatar style={{ float: "left" }}>Gun</Avatar>
                <Typography variant="h6">김건</Typography>
                <div>20-10-22- 9:30</div>
                <div>
                  안녕하세요안녕안암암ㄴ암암나ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ아
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Posts />
        <Posts />
      </PostsListTemplate>
      <ReplyListTemplate />
    </>
  );
};

export default Home;
