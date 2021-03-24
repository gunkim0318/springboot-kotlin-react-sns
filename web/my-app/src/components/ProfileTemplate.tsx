import React from "react";
import { Grid } from "@material-ui/core";
import { PageInfo } from "./PageInfo";
import { ProfileContainer } from "../containers/ProfileContainer";

export const ProfileTemplate = () => {
  return (
    <>
      <PageInfo value="프로필" />
      <ProfileContainer />
    </>
  );
};
