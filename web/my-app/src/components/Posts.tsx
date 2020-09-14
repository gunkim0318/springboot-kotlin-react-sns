import React from "react";
import { Avatar, Paper, Box } from "@material-ui/core";
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
      <Box component="div" pt={1}>
        <div>
          <Avatar component="span">N</Avatar>
        </div>
        <Box component="div" m={1}>
          김건입니다.
        </Box>
      </Box>
    </Paper>
  );
};

export default Posts;
