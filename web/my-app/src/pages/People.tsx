import React from "react";
import { Grid, Typography } from "@material-ui/core";
import BackButton from "../components/organisms/MyHeader";

const People: React.FC = () => {
  return (
    <>
      <BackButton />
      <Grid container justify="center">
        <Typography variant="h3">친구 추천</Typography>
      </Grid>
    </>
  );
};

export default People;
