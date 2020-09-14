import React from "react";
import PostsList from "./PostsList";
import { Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: "10px",
    },
  })
);
type PostsListTemplateProps = {
  Form: any;
};

const PostsListTemplate = ({ Form }: PostsListTemplateProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Form />
      <PostsList />
    </Container>
  );
};

export default PostsListTemplate;
