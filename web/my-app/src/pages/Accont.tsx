import React from "react";
import Header from "../components/Header";
import {
  Container,
  Paper,
  makeStyles,
  createStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "10px",
    },
    header: {
      margin: "20px 0px",
    },
    paper: {
      padding: "20px 50px",
    },
    input: {
      margin: "30px 0px",
    },
  })
);
const Accont = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="xs" className={classes.root}>
        <Paper className={classes.paper}>
          <Typography
            align="center"
            variant="h4"
            component="h4"
            className={classes.header}
          >
            계정 정보 수정
          </Typography>
          <div className={classes.input}>
            <TextField
              required
              id="outlined-required"
              label="닉네임"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={classes.input}>
            <TextField
              id="outlined-required"
              label="설명1"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={classes.input}>
            <TextField
              id="outlined-required"
              label="설명2"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={classes.input}>
            <TextField
              id="outlined-required"
              label="설명3"
              variant="outlined"
              fullWidth
            />
          </div>
          <Button variant="outlined" color="primary">
            등록
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Accont;
