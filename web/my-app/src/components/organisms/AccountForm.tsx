import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Profile } from "../../apis/profile";
import { modifyProfileAsync } from "../../modules/profile";
import { DefaultButton } from "../atoms/DefaultButton";
import { ProfileImage } from "../atoms/ProfileImage";
import { TextInput } from "../atoms/TextInput";

const style = {
  marginBottom: "20px",
};

type AccountFormProps = {
  nickname: string;
  info: string;
  image: string;
  loading: boolean;
  error: Error | null;
};

export const AccountForm = ({
  nickname,
  info,
  image,
  loading,
  error,
}: AccountFormProps) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState<Profile>({
    nickname: nickname,
    info: info,
    image: image,
    followers: 0,
    following: 0,
  });
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    const { name: key, value } = e.target;
    setProfile({
      ...profile,
      [key]: value,
    });
  };
  const onSubmit = () => {
    dispatch(modifyProfileAsync.request(profile));
  };

  if (loading) {
    return <div>로딩중입니다.</div>;
  }
  if (error) {
    return <div>에러가 발생하였습니다.</div>;
  }
  return (
    <>
      <ProfileImage
        url={profile.image}
        name={profile.nickname}
        width={250}
        height={250}
      />
      <TextInput
        placeholder="닉네임을 입력해주세요"
        name="nickname"
        value={profile.nickname}
        onChange={onChange}
      />
      <TextInput
        placeholder="소개를 입력해주세요"
        name="info"
        value={profile.info}
        onChange={onChange}
      />
      <DefaultButton onSubmit={onSubmit}>수정</DefaultButton>
    </>
  );
};
