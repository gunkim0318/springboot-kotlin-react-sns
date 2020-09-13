import React from "react";
import { Avatar, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "10px",
      marginTop: "10px",
    },
  })
);
const Posts = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Avatar>N</Avatar>
    </Paper>
  );
};

export default Posts;
