import { Input } from "@material-ui/core";
import React from "react";

const DefaultInput = () => {
  return (
    <Input
      inputProps={{ "aria-label": "description" }}
      fullWidth={true}
      style={{ fontSize: "2rem" }}
    />
  );
};
export default DefaultInput;
