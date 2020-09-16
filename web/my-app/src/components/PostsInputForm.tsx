import React from "react";
import {
  Paper,
  createStyles,
  makeStyles,
  Theme,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: "10px",
      margin: "10px 0px",
    },
    form: {
      marginBottom: "10px",
    },
  })
);
const PostsInputForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          id="outlined-multiline-static"
          label="게시물을 입력해주세요"
          multiline
          rows={3}
          variant="outlined"
          fullWidth
        />
      </form>
      <Button variant="outlined" color="primary">
        작성
      </Button>
    </Paper>
  );
};

export default PostsInputForm;
