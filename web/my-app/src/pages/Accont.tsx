import React, { useEffect } from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Input from "@material-ui/core/Input/Input";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getProfileAsync, modifyProfileAsync } from "../modules/profile";

const Account = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.profile
  );

  const nickname: string | null | undefined = data?.nickname;
  const image: string | null | undefined = data?.image;
  const info: string | null | undefined = data?.info;

  useEffect(() => {
    dispatch(getProfileAsync.request(""));
  }, [dispatch]);
  const onSubmit = () => {
    dispatch(modifyProfileAsync.request());
  };
  return (
    <>
      <BackButton />
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h3">정보 수정</Typography>
        <Avatar style={{ width: "250px", height: "250px" }} src={image}>
          {nickname}
        </Avatar>
        <Grid container direction="column" justify="center" xs={4}>
          <Input
            placeholder="닉네임을 입력해주세요"
            inputProps={{ "aria-label": "description" }}
            fullWidth={true}
            style={{ marginBottom: "20px" }}
            value={nickname}
          />
          <Input
            placeholder="소개를 입력해주세요"
            inputProps={{ "aria-label": "description" }}
            fullWidth={true}
            style={{ marginBottom: "20px" }}
            value={info}
          />
          <Button
            variant="outlined"
            color="primary"
            fullWidth={true}
            onClick={onSubmit}
          >
            수정
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Account;
