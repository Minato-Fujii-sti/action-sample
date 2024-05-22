import { TextField as MUITextField } from "@material-ui/core";
import React from "react";

export type TextFieldProps = {
  id: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextField = (props: TextFieldProps) => {
  return (
    <MUITextField
      id={props.id}
      variant="outlined"
      required={props.required}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
