import React from "react";
import { PageInfo } from "../common/PageInfo";
import { ProfileContainer } from "../../containers/ProfileContainer";

export const ProfileTemplate = () => {
  return (
    <>
      <PageInfo value="프로필" />
      <ProfileContainer />
    </>
  );
};
