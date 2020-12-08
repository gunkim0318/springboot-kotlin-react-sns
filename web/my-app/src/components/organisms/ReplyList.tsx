import React from "react";
import { Reply } from "../molecules/Reply";
import { Paper } from "@material-ui/core";

export const ReplyList = () => {
  return (
    <Paper elevation={3}>
      <Reply />
      <Reply />
      <Reply />
      <Reply />
      <Reply />
      <Reply />
    </Paper>
  );
};
