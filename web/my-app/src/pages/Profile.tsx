import React from "react";
import MyHeader from "../components/organisms/MyHeader";
import { ProfileTemplate } from "../components/templates/ProfileTemplate";
import PostsListContainer from "../containers/PostsListContainer";
import {Grid} from "@material-ui/core";

const Profile = () => {
  return (
    <>
      <MyHeader />
      <Grid container direction="row" justify="center" alignContent="center" alignItems="center">
          <Grid xs={10} md={5}>
              <ProfileTemplate />
              <PostsListContainer/>
          </Grid>
      </Grid>
    </>
  );
};

export default Profile;
