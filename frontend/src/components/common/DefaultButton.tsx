import React, { ReactNode } from "react";
import { Button } from "@material-ui/core";

type DefaultButtonProps = {
  children: ReactNode;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DefaultButton = ({ children, onSubmit }: DefaultButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth={true}
      onClick={onSubmit}
    >
      {children}
    </Button>
  );
};
