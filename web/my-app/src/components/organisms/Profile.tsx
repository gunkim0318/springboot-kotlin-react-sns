import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { ProfileImage } from "../atoms/ProfileImage";
import { Profile as ProfileType } from "../../apis/profile";

type ProfileProps = {
  data: ProfileType;
  loading: Boolean;
  error: Error | null;
};
const Profile = ({ data, loading, error }: ProfileProps) => {
  const { nickname, image, info, followers, following } = data;
  return (
    <Paper style={{ padding: "40px"}} elevation={3}>
      <Grid container direction="column" justify="center" alignItems="center">
        <ProfileImage url={image} name={nickname} width={250} height={250} />
        <Typography variant="h4">{nickname}</Typography>
        <Typography variant="body1">{info}</Typography>
        <div>
          followers <b>{followers}</b> following <b>{following}</b>
        </div>
      </Grid>
    </Paper>
  );
};

export default Profile;
