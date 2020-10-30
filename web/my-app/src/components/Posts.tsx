import React from "react";
import { Avatar, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import { ArrowDropDown, Reply, MoreHoriz } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "16px",
    marginTop: "10px",
    marginBottom: "2px",
  },
}));
const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Grid xs={12} style={{ minHeight: "60px" }}>
          <Avatar style={{ float: "left", marginRight: "10px" }}>gun</Avatar>
          <Grid style={{ float: "left" }}>
            <Typography variant="h5" component="h5">
              김건
            </Typography>
            <div>20-10-22 9:30</div>
          </Grid>
          <span style={{ float: "right" }}>
            <Button>
              <MoreHoriz />
            </Button>
          </span>
        </Grid>
        <Grid xs={12}>
          내용은 이렇다~아.내용은 이렇다~아.내용은 이렇다~아.내용은
          이렇다~아내용은 이렇다~아내용은 이렇다~아내용은 이렇다~아내용은
          이렇다~아
        </Grid>
        <Grid container justify="center" style={{ marginTop: "20px" }}>
          <Button>
            <ThumbUpIcon />
          </Button>
          <Button>
            <Reply />
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default Posts;
