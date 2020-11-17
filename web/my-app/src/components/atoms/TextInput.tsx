import { Input } from "@material-ui/core";
import React from "react";

const style = {
  marginBottom: "30px",
};

type TextInputProps = {
  placeholder: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};
export const TextInput = ({
  placeholder,
  name,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      name={name}
      value={value}
      fullWidth={true}
      onChange={onChange}
      style={style}
    />
  );
};
