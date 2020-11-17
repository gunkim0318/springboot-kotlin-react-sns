import { Grid } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <Grid container direction="row" justify="flex-start">
      <Grid style={{ padding: 10 }}>
        <Link to="/">
          <ArrowBack />
        </Link>
      </Grid>
    </Grid>
  );
};

export default MyHeader;
