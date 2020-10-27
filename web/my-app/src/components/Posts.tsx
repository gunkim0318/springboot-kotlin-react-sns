import React from "react";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import { ArrowDropDown } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
}));
const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" component="h6">
          크기가 커진다잉~~~~~~~~~
        </Typography>
      </Paper>
      <Typography variant="body2" color="textSecondary">
        <Button>
          <ArrowDropDown />
        </Button>
        20-10-22 9:30 am. write by 김건
      </Typography>
    </>
  );
};

export default Posts;
