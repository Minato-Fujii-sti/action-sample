import { GridSize, Grid as MUIGrid } from "@material-ui/core";
import React from "react";

export type GridProps = {
  container?: boolean;
  xs?: GridSize;
  children: React.ReactNode;
};
export const Grid = (props: GridProps) => {
  return (
    <MUIGrid container={props.container} xs={props.xs} alignItems="center">
      {props.children}
    </MUIGrid>
  );
};
