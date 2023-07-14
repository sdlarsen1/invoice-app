import { Invoice } from "app/domain/entities/Invoice";
import InvoiceCard from "components/InvoiceCard/InvoiceCard";
import { Grid } from "@mui/material";
import React from "react";
import InvoiceModal from "components/InvoiceModal/InvoiceModal";

type P = {
  invoices: Invoice[] | undefined;
};

const CardScroll = ({ invoices }: P) => {
  return (
    <>
      <InvoiceModal />
      <Grid container spacing={4} paddingX={8} sx={{ overflowY: "scroll" }}>
        {invoices?.map((invoice) => (
          <Grid item xs={3} key={invoice.id}>
            <InvoiceCard invoice={invoice} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardScroll;
