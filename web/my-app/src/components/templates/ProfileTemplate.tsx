import React from "react";
import { Grid } from "@material-ui/core";
import { PageInfo } from "../atoms/PageInfo";
import { ProfileContainer } from "../../containers/ProfileContainer";

export const ProfileTemplate = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <PageInfo value="프로필" />
      <Grid xs={5}>
        <ProfileContainer />
      </Grid>
    </Grid>
  );
};
