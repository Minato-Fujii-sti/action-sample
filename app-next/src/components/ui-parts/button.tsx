import { Button as MUIButton } from "@material-ui/core";
import React from "react";

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};
export const Button = (props: ButtonProps) => {
  return (
    <MUIButton
      variant="contained"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </MUIButton>
  );
};
