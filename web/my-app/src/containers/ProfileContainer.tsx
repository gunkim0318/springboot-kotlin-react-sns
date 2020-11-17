import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../components/organisms/Profile";
import { RootState } from "../modules";
import { getProfileAsync } from "../modules/profile";

export const ProfileContainer = memo(() => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    dispatch(getProfileAsync.request(""));
  }, [dispatch]);

  if (data) {
    return <Profile data={data} loading={loading} error={error} />;
  }
  return <></>;
});
