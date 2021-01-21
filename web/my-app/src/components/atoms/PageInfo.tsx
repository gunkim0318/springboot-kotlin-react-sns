import { Typography } from "@material-ui/core";
import React from "react";

const style = {
  marginBottom: "30px",
};
type pageInfoProps = {
  value: string;
};
export const PageInfo = ({ value }: pageInfoProps) => {
  return (
    <Typography variant="h3" style={style} align="center">
      {value}
    </Typography>
  );
};
