import { useInvoiceModalContext } from "components/InvoiceModal/Provider";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FieldValues, useForm } from "react-hook-form";
import CustomerCard from "components/InvoiceModal/InvoiceComponents/CustomerCard";
import { useInvoiceSubmit } from "components/InvoiceModal/InvoiceComponents/useInvoiceSubmit";
import InvoiceItemGrid from "components/InvoiceModal/InvoiceComponents/InvoiceItemGrid/InvoiceItemGrid";
import DateRow from "components/InvoiceModal/InvoiceComponents/DateRow";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: 1200,
    maxHeight: 800,
    minWidth: 800,
    minHeight: 900,
    background: theme.palette.background.default,
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(34),
  fontWeight: "bold",
  padding: theme.spacing(1, 2),
}));

type P = { isFetching: boolean };

const InvoiceModal = ({ isFetching }: P) => {
  const { invoiceModal } = useInvoiceModalContext();
  const invoice = invoiceModal.payload?.invoice;
  const isNew = invoiceModal.payload?.isNew;

  const { defaults } = useInvoiceSubmit({ invoice, isFetching });
  console.log(defaults);

  const { control, handleSubmit, setValue, reset } = useForm<FieldValues>({
    criteriaMode: "all",
    defaultValues: defaults,
  });

  const handleClose = () => invoiceModal.toggle();
  const handleClear = () => reset({});

  return (
    <StyledDialog open={invoiceModal.isOpen} onClose={invoiceModal.toggle}>
      <form>
        <StyledDialogTitle>
          {"Invoice"}
          {
            <IconButton
              size="medium"
              onClick={handleClose}
              sx={{ position: "absolute", right: 8, top: 12 }}
            >
              <CloseIcon />
            </IconButton>
          }
        </StyledDialogTitle>
        <DialogContent>
          <Stack direction="column" spacing={4}>
            <DateRow control={control} />
            <Stack direction="row" spacing={2}>
              <CustomerCard control={control} setValue={setValue} isBillTo />
              <CustomerCard control={control} setValue={setValue} />
            </Stack>
            <InvoiceItemGrid />
          </Stack>
        </DialogContent>
      </form>
    </StyledDialog>
  );
};

export default InvoiceModal;
