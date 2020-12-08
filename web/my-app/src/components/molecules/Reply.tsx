import React from "react";
import { Paper } from "@material-ui/core";
import DefaultInput from "../atoms/DefaultInput";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export const Reply = () => {
  const onChange = () => {};
  const onSubmit = () => {};
  return (
    <>
      <Avatar>Gun</Avatar>
      <Typography variant="h6">Strong Man</Typography>
      <p>안녕하세요</p>
    </>
  );
};
