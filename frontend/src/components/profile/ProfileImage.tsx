import { Avatar } from "@material-ui/core";
import React from "react";

const style = {
  marginBottom: "30px",
};
type ProfileImageProps = {
  url: string;
  name: string;
  width: number;
  height: number;
};
export const ProfileImage = ({
  url,
  name,
  width,
  height,
}: ProfileImageProps) => {
  const [inWidth, inHeight] = [`${width}px`, `${height}px`];
  return (
    <Avatar style={{ ...style, width: inWidth, height: inHeight }} src={url}>
      {name}
    </Avatar>
  );
};
