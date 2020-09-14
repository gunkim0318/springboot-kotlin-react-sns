import React from "react";
import {
  Paper,
  createStyles,
  makeStyles,
  Theme,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: "10px",
      marginTop: "10px",
    },
  })
);
const PostsInputForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="게시글을 입력해주세요"
          variant="outlined"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default PostsInputForm;
