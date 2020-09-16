import React from "react";
import {
  Paper,
  Typography,
  Container,
  createStyles,
  Theme,
  makeStyles,
  List,
  Avatar,
} from "@material-ui/core";
import ProfileItem from "../components/ProfileItem";
import PostsList from "../components/PostsList";
import Header from "../components/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "10px",
    },
    root2: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    padding: {
      padding: "30px",
    },
    inline: {
      display: "inline",
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      margin: "0 auto",
    },
    header: {
      margin: "20px 0px",
    },
  })
);
const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="sm" className={classes.root}>
        <Paper className={classes.padding}>
          <Avatar alt="Gunkim" src="empty.png" className={classes.large} />
          <Typography
            align="center"
            variant="h4"
            component="h4"
            className={classes.header}
          >
            소개
          </Typography>
          <List className={classes.root2}>
            <ProfileItem />
            <ProfileItem />
            <ProfileItem />
          </List>
        </Paper>
        <PostsList />
      </Container>
    </>
  );
};

export default Profile;
