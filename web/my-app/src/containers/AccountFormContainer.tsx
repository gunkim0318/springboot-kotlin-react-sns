import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountForm } from "../components/organisms/AccountForm";
import { RootState } from "../modules";
import { getProfileAsync } from "../modules/profile";

export const AccountFormContainer = () => {
  const dispatch = useDispatch();

  const { data: profile, loading, error } = useSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    dispatch(getProfileAsync.request(""));
  }, [dispatch]);

  if (profile) {
    return (
      <AccountForm
        nickname={profile.nickname}
        info={profile.info}
        image={profile.image}
        loading={loading}
        error={error}
      />
    );
  }
  return <div></div>;
};
