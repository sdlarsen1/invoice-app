import { Button, Paper, Typography } from "@mui/material";
import { useGetInvoicesQuery } from "redux/features/invoicing/invoicingApi";

const Invoicing = () => {
  const { data } = useGetInvoicesQuery();
  console.log(data);

  return (
    <>
      <Paper sx={{ height: "100vh" }}>
        <Typography variant="h2" fontWeight="bold">
          Invoicing
        </Typography>
        <Button variant="contained" color="primary">
          Help
        </Button>
      </Paper>
    </>
  );
};

export default Invoicing;
