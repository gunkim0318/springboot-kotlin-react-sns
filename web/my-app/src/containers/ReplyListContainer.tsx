import React, { useEffect } from "react";
import { ReplyList } from "../components/organisms/ReplyList";
import { useDispatch, useSelector } from "react-redux";
import { getReplyListAsync } from "../modules/replys";
import { RootState } from "../modules";

type ReplyListContainerProps = {
  postsId: number;
}
export const ReplyListContainer = ({postsId}: ReplyListContainerProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReplyListAsync.request(postsId));
  }, [dispatch]);

  const { data: replyList, loading, error } = useSelector(
    (state: RootState) => state.replys
  );
  console.log(replyList)
  return (
    <>
       {/*<ReplyList data={replyList[postsId]} loading={loading} error={error} />*/}
    </>
  );
};
