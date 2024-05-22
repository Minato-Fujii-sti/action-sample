import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Header } from "src/components/ui-components/header";
import { DataGrid } from "src/components/ui-parts/data-grid";

export const Calender = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "日付", width: 90 },
    {
      field: "type",
      headerName: "勤務区分",
      width: 150,
    },
    {
      field: "startTime",
      headerName: "出勤時刻\n(打刻)",
      width: 150,
    },
    {
      field: "endTime",
      headerName: "退勤時刻\n(打刻)",
      width: 110,
    },
    {
      field: "breakTime",
      headerName: "休憩時間",
      width: 110,
    },
    {
      field: "note",
      headerName: "備考",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    {
      id: "01(木)",
      type: "出勤",
      startTime: "10:00",
      endTime: "17:30",
      breakTime: "1:00",
      note: "備考は特になし",
    },
  ];
  return (
    <div>
      <Header currentScreen="calender" />
      <p>社員情報</p>
      <p>月の選択フォーム</p>
      <DataGrid rows={rows} columns={columns} />
      <p>合計時間</p>
    </div>
  );
};
