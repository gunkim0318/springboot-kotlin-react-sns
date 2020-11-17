import { Input } from "@material-ui/core";
import React from "react";

const style = {
  fontSize: "2rem",
};
const DefaultInput = () => {
  return (
    <Input
      inputProps={{ "aria-label": "description" }}
      fullWidth={true}
      style={style}
    />
  );
};
export default DefaultInput;
