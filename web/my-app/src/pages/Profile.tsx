import React from "react";
import { Grid, Typography, Paper, Avatar } from "@material-ui/core";
import BackButton from "../components/BackButton";

const Profile = () => {
  return (
    <>
      <BackButton />
      <Grid container justify="center">
        <Grid xs={11} md={5}>
          <Paper style={{ padding: "20px" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h3">프로필</Typography>
              <Avatar style={{ width: "200px", height: "200px" }}>Gun</Avatar>
              <Typography variant="h4">김건</Typography>
              <Grid>
                follow <b>1</b> following <b>2</b>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
