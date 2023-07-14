import { Button, Paper, Typography } from "@mui/material";

const Invoicing = () => {
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
