import React from "react";
import {
  Paper,
  Typography,
  Container,
  createStyles,
  Theme,
  makeStyles,
  List,
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
    inline: {
      display: "inline",
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
