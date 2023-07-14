import { useInvoiceModalContext } from "components/InvoiceModal/Provider";
import { Dialog, DialogTitle } from "@mui/material";

const InvoiceModal = () => {
  const { invoiceModal } = useInvoiceModalContext();
  return (
    <Dialog open={invoiceModal.isOpen} onClose={invoiceModal.toggle}>
      <DialogTitle>Invoice</DialogTitle>
    </Dialog>
  );
};

export default InvoiceModal;