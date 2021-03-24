import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountForm } from "../components/AccountForm";
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

  return (
    <>
      {profile && (
        <AccountForm
          nickname={profile.nickname}
          info={profile.info}
          image={profile.image}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
};
