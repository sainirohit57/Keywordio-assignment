import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function AdTable({ rows, columns }) {
  return (
    <div style={{ width: "100%", overflow: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        disableColumnMenu
        className="custom-data-grid"
      />
    </div>
  );
}
