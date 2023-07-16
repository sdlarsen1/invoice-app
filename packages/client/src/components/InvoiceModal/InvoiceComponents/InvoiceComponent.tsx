import { ReactNode } from "react";
import { Paper } from "@mui/material";

type P = {
  children: ReactNode;
};

const InvoiceComponent = ({ children }: P) => {
  return (
    <Paper
      sx={{
        border: "none",
        borderRadius: "6px",
        padding: 2,
      }}
    >
      {children}
    </Paper>
  );
};

export default InvoiceComponent;
