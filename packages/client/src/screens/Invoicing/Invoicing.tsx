import { Stack } from "@mui/material";
import { useGetInvoicesQuery } from "redux/features/invoicing/invoicingApi";
import CardScroll from "components/CardScroll/CardScroll";
import ButtonBar from "components/ButtonBar/ButtonBar";

const Invoicing = () => {
  const { data: invoices } = useGetInvoicesQuery();
  console.log(invoices);

  return (
    <>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
        sx={{ height: "100vh", overflow: "hidden" }}
      >
        <ButtonBar />
        <CardScroll invoices={invoices} />
      </Stack>
    </>
  );
};

export default Invoicing;
