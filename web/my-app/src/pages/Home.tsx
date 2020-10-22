import { Grid, Typography, Input, Paper } from "@material-ui/core";
import React from "react";
const Home: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <Typography variant="h2">글을 입력하세요</Typography>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={4}>
          <Input
            inputProps={{ "aria-label": "description" }}
            fullWidth={true}
            style={{ fontSize: "2rem" }}
          />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Paper variant="outlined" style={{ marginTop: 30 }}>
          안녕
        </Paper>
      </Grid>
    </>
  );
};

export default Home;
