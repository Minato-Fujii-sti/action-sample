import { GridColDef, DataGrid as MUIDataGrid } from "@mui/x-data-grid";
import React from "react";

export type DataGridProps = {
  rows: any[];
  columns: GridColDef[];
};
export const DataGrid = (props: DataGridProps) => {
  return <MUIDataGrid rows={props.rows} columns={props.columns} />;
};
