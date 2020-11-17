import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../components/organisms/Profile";
import { RootState } from "../modules";
import { getProfileAsync } from "../modules/profile";

export const ProfileContainer = memo(() => {
  const dispatch = useDispatch();

  const { data: profile, loading, error } = useSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    dispatch(getProfileAsync.request(""));
  }, [dispatch]);

  if (profile) {
    return (
      <Profile
        name={profile.nickname}
        info={profile.info}
        image={profile.image}
        followers={profile.followers}
        following={profile.following}
      />
    );
  }
  return <></>;
});
