import React from "react";
import { Reply } from "../molecules/Reply";
import { Paper } from "@material-ui/core";
import { Reply as ReplyType } from "../../apis/reply";
import { AxiosError } from "axios";

type ReplyListProps = {
  data: ReplyType[] | null;
  loading: boolean;
  error: any | null;
};
export const ReplyList = ({ data, loading, error }: ReplyListProps) => {
  return (
    <Paper elevation={3}>
      {data && data.map((reply) => reply.name)}
      <Reply />
      <Reply />
      <Reply />
      <Reply />
      <Reply />
      <Reply />
    </Paper>
  );
};
