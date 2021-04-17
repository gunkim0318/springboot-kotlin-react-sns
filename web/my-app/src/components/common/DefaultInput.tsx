import { Input } from "@material-ui/core";
import React from "react";

type DefaultInputType = {
  value?: string | '';
  placeholder: string;
  onChange?: (e:any) => void | null;
  onSubmit?: (e:any) => void | null;
  fontSize?: number | 2;
}
const DefaultInput = ({value, placeholder, onChange, onSubmit, fontSize}:DefaultInputType) => {
  const style = {
    fontSize: `${fontSize}rem`
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
          name="myValue"
          inputProps={{ "aria-label": "description" }}
          fullWidth={true}
          placeholder={placeholder}
          style={style}
          onChange={onChange}
          value={value}
      />
    </form>
  );
};
export default DefaultInput;
