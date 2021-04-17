import { Grid } from "@material-ui/core";
import React from "react";
import { PageInfo } from "../common/PageInfo";

type AccountTemplateProps = {
  children: React.ReactNode;
};

export const AccountTemplate = ({ children }: AccountTemplateProps) => {
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <PageInfo value="프로필 수정" />
        <Grid
          container
          direction="column"
          justify="center"
          xs={4}
          alignItems="center"
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};
