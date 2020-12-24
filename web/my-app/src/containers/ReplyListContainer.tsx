import React, { useEffect } from "react";
import { ReplyList } from "../components/organisms/ReplyList";
import { useDispatch, useSelector } from "react-redux";
import { getReplyListAsync } from "../modules/replys";
import { RootState } from "../modules";

export const ReplyListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReplyListAsync.request(1));
  }, [dispatch]);

  // const { data: replyList, loading, error } = useSelector(
  //   (state: RootState) => state.replys
  // );

  return (
    <>
      {/* <ReplyList data={replyList} loading={loading} error={error} /> */}
    </>
  );
};
