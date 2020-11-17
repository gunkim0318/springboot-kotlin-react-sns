import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const Login = () => {
  return (
    <>
      <Grid container direction="row" justify="center">
        <Grid>
          <Paper elevation={5} style={{ padding: "20px" }}>
            <Typography variant="h4" align="center">
              로그인
            </Typography>
            <img
              src="/button/kakao.png"
              style={{ width: "200px" }}
              alt="로그인 버튼"
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
