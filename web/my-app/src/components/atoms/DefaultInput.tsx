import { Input } from "@material-ui/core";
import React from "react";

const style = {
  fontSize: "2rem",
};
type DefaultInputType = {
  value: string;
  onChange: (e:any) => void;
  onSubmit: (e:any) => void;
}
const DefaultInput = ({value, onChange, onSubmit}:DefaultInputType) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
          inputProps={{ "aria-label": "description" }}
          fullWidth={true}
          style={style}
          onChange={onChange}
          value={value}
      />
    </form>
  );
};
export default DefaultInput;
