import React from "react";
import { Avatar, Badge, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import { Reply, MoreHoriz } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { PostsButton } from "./PostsButton";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "16px",
    marginTop: "10px",
    marginBottom: "2px",
  },
  myLikes: {
    color: "#486eff",
  },
}));

type PostsProps = {
  id: number;
  name: string;
  contents: string;
  likeCnt: number;
  isLikes: boolean;
  creDate: string;
  image: string;
  onClick: () => void;
};

const Posts = ({ id, name, contents, likeCnt, isLikes, creDate, image, onClick }: PostsProps) => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Grid style={{ minHeight: "60px" }}>
          <Avatar style={{ float: "left", marginRight: "10px" }} src={image}>gun</Avatar>
          <Grid style={{ float: "left" }}>
            <Typography variant="h5" component="h5">
              {name}
            </Typography>
            <div>{creDate}</div>
          </Grid>
          <span style={{ float: "right" }}>
            <PostsButton id={id}>
              <MoreHoriz />
            </PostsButton>
          </span>
        </Grid>
        <Grid>{contents}</Grid>
        <Grid container justify="center" style={{ marginTop: "20px" }}>
          <Button>
            <Badge badgeContent={likeCnt} color="primary" showZero onClick={onClick}>
              <ThumbUpIcon className={isLikes ? classes.myLikes : ""}/>
            </Badge>
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
