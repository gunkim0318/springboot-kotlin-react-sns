import React from "react";
import Header from "../components/Header";
import { Paper, Typography, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: "10px",
    },
  })
);
const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="sm" className={classes.root}>
        <Paper>
          <Typography align="center" variant="h4" component="h4" gutterBottom>
            소개
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Profile;
