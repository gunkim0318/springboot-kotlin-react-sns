import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { ProfileImage } from "../atoms/ProfileImage";
import { useRouteMatch } from "react-router-dom";

type ProfileProps = {
  name: string;
  info: string;
  image: string;
  followers: number;
  following: number;
};
const Profile = ({ name, info, image, followers, following }: ProfileProps) => {
  return (
    <Paper style={{ padding: "40px" }} elevation={3}>
      <Grid container direction="column" justify="center" alignItems="center">
        <ProfileImage url={image} name={name} width={200} height={200} />
        <Typography variant="h4">{name}</Typography>
        <Typography variant="body1">{info}</Typography>
        <div>
          followers <b>{followers}</b> following <b>{following}</b>
        </div>
      </Grid>
    </Paper>
  );
};

export default Profile;
