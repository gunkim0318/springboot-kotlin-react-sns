import React, { useState } from "react";
import {
  Paper,
  createStyles,
  makeStyles,
  Theme,
  TextField,
  Button,
} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: "10px",
      margin: "10px 0px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper1: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: theme.spacing(100),
      margin: "10px",
    },
    button: {
      marginTop: "10px",
    },
  })
);

const PostsInputForm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper className={classes.paper}>
      <TextField
        id="filled-required"
        label="게시물을 입력해주세요"
        variant="filled"
        fullWidth
        onClick={handleOpen}
        disabled
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
          <div className={classes.paper1}>
            <TextField
              id="outlined-multiline-static"
              label="글 내용"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
            >
              등록
            </Button>
          </div>
        </Fade>
      </Modal>
    </Paper>
  );
};

export default PostsInputForm;
