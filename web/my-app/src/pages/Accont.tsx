import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Input from "@material-ui/core/Input/Input";
import BackButton from "../components/BackButton";

const Account = () => {
  return (
    <>
      <BackButton />
      <Grid container justify="center">
        <Typography variant="h3">정보 수정</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "50px" }}
      >
        <Grid style={{ padding: 10 }} xs={10} sm={4}>
          <Grid xs={12}>
            <Input
              placeholder="닉네임을 입력해주세요"
              inputProps={{ "aria-label": "description" }}
              fullWidth={true}
            />
          </Grid>
          <Grid xs={12} style={{ marginTop: "20px" }}>
            <Input
              placeholder="소개를 입력해주세요"
              inputProps={{ "aria-label": "description" }}
              fullWidth={true}
            />
          </Grid>
          <Grid xs={12} style={{ marginTop: "20px" }}>
            <Button variant="outlined" color="primary" fullWidth={true}>
              수정
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Account;
