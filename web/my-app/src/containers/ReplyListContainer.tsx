import React, { useEffect } from "react";
import { ReplyList } from "../components/ReplyList";
import { useDispatch, useSelector } from "react-redux";
import {getReplyListAsync, ReplyData} from "../modules/replys";
import { RootState } from "../modules";

type ReplyListContainerProps = {
  postsId: number;
}
export const ReplyListContainer = ({postsId}: ReplyListContainerProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReplyListAsync.request(postsId));
  }, [dispatch]);

  const { data, loading, error } = useSelector(
    (state: RootState) => state.replys
  );
  // const test = {
  // };

  type K = keyof typeof data;

  let replyList: ReplyData | null = null;

  Object.keys(data).forEach((key) => {
    if(parseInt(key) == postsId){
      replyList = data[key as K];
    }
  });
   return (
    <>
      <ReplyList data={replyList} loading={loading} error={error} />
    </>
  );
};
