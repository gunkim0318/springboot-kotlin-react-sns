import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
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
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="게시글을 입력해주세요"
          variant="outlined"
          fullWidth={true}
        />
      </form>
    </Paper>
  );
};

export default PostsInputForm;
