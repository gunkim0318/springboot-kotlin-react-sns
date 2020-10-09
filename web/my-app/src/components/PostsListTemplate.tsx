import React from "react";
import { Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";
import PostsListContainer from "../containers/PostsListContainer";

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
      <PostsListContainer />
    </Container>
  );
};

export default PostsListTemplate;
