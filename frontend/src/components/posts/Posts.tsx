import React, { useState } from "react";
import {
  Avatar,
  Backdrop,
  Badge,
  Collapse,
  Fade,
  Modal,
  Paper,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import { Reply, MoreHoriz } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { PostsButton } from "./PostsButton";
import { ReplyListContainer } from "../../containers/ReplyListContainer";
import DefaultInput from "../common/DefaultInput";
import { useDispatch } from "react-redux";
import { Posts as PostsType } from "../../apis/posts";
import { updatePostsAsync } from "../../modules/posts";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "16px",
    marginTop: "10px",
    marginBottom: "2px",
    backgroundColor: "white",
  },
  myLikes: {
    color: "#486eff",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  onInputSubmit: (e: any) => void;
};

const Posts = ({
  id,
  name,
  contents,
  likeCnt,
  isLikes,
  creDate,
  image,
  onClick,
  onInputSubmit,
}: PostsProps) => {
  const classes = useStyles();
  const [showReply, setShowReply] = useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(contents);

  const handleClose = () => {
    setOpen(false);
  };
  const handleReplyUpdate = () => {
    setOpen(true);
  };
  const handleReplyUpdateChange = (e: any) => {
    setUpdate(e.target.value);
  };
  const handleReplyUpdateSubmit = (e: any) => {
    e.preventDefault();
    const posts: PostsType = {
      id: id,
      contents: update,
      likeCnt: 0,
      isLikes: false,
      name: "",
      creDate: "",
      image: "",
    };
    dispatch(updatePostsAsync.request(posts));
    setOpen(false);
  };

  const onShowReply = () => {
    setShowReply(!showReply);
  };
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Grid style={{ minHeight: "60px" }}>
          <Avatar style={{ float: "left", marginRight: "10px" }} src={image}>
            gun
          </Avatar>
          <Grid style={{ float: "left" }}>
            <Typography variant="h5" component="h5">
              {name}
            </Typography>
            <div>{creDate}</div>
          </Grid>
          <span style={{ float: "right" }}>
            <PostsButton id={id} handleReplyUpdate={handleReplyUpdate}>
              <MoreHoriz />
            </PostsButton>
          </span>
        </Grid>
        <Grid>{contents}</Grid>
        <Grid container justify="center" style={{ marginTop: "20px" }}>
          <Button onClick={onClick}>
            <Badge badgeContent={likeCnt} color="primary" showZero>
              <ThumbUpIcon className={isLikes ? classes.myLikes : ""} />
            </Badge>
          </Button>
          <Button onClick={onShowReply}>
            <Reply />
          </Button>
        </Grid>
        <Collapse in={showReply}>
          <hr />
          <DefaultInput
            placeholder="지금 댓글을 입력해보세요!"
            onSubmit={onInputSubmit}
          />
          {showReply && <ReplyListContainer postsId={id} />}
        </Collapse>
      </Paper>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <DefaultInput
              placeholder="수정할 내용을 입력하세요"
              value={update}
              onChange={handleReplyUpdateChange}
              onSubmit={handleReplyUpdateSubmit}
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Posts;
