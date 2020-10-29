import { Button, Grid } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";

const BackButton = () => {
  return (
    <Grid container direction="row" justify="flex-start">
      <Grid style={{ padding: 10 }}>
        <Button>
          <ArrowBack />
        </Button>
      </Grid>
    </Grid>
  );
};

export default BackButton;
