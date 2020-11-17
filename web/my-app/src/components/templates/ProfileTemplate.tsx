import React from "react";
import { Grid } from "@material-ui/core";
import { PageInfo } from "../atoms/PageInfo";
import { ProfileContainer } from "../../containers/ProfileContainer";

export const ProfileTemplate = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <PageInfo value="프로필" />
      <Grid xs={11} md={10}>
        <ProfileContainer />
      </Grid>
    </Grid>
  );
};
