import {
  DataGrid,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowModel,
  GridRowModesModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import EditToolbar from "./EditToolbar";
import { useState } from "react";
import { useColumnDef } from "components/InvoiceModal/InvoiceComponents/InvoiceItemGrid/columnDef";
import InvoiceComponent from "components/InvoiceModal/InvoiceComponents/InvoiceComponent";

const InvoiceItemGrid = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const { columnDef } = useColumnDef({
    rowModesModel,
    setRowModesModel,
    rows,
    setRows,
  });

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  return (
    <InvoiceComponent>
      <DataGrid
        rows={rows}
        columns={columnDef}
        editMode="row"
        rowModesModel={rowModesModel}
        processRowUpdate={processRowUpdate}
        onRowEditStop={handleRowEditStop}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        sx={{ height: 400, width: "100%" }}
      />
    </InvoiceComponent>
  );
};

export default InvoiceItemGrid;
