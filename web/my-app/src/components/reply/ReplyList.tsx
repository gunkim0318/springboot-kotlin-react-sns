import React from "react";
import { Reply } from "./Reply";
import { Reply as ReplyType } from "../../apis/reply";

type ReplyListProps = {
  data: ReplyType[] | null;
  loading: boolean;
  error: any | null;
};
export const ReplyList = ({ data, loading, error }: ReplyListProps) => {
  return (
    <>
      {data &&
        data.map((reply) => (
          <Reply
            name={reply.name}
            contents={reply.contents}
            profileImage={reply.profileImage}
          />
        ))}
    </>
  );
};
