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
    <>
        {
            data && data.map((reply) => (
                <Reply name={reply.name} contents={reply.contents} profileImage={reply.profileImage}/>
            ))
        }
    </>
  );
};
