import { Invoice } from "app/domain/entities/Invoice";
import InvoiceCard from "components/InvoiceCard/InvoiceCard";
import { Grid } from "@mui/material";
import React from "react";

type P = {
  invoices: Invoice[] | undefined;
};

const CardScroll = ({ invoices }: P) => {
  return (
    <Grid container spacing={4} paddingX={8} sx={{ overflowY: "scroll" }}>
      {invoices?.map((invoice) => (
        <Grid item xs={3}>
          <InvoiceCard key={invoice.id} invoice={invoice} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardScroll;
