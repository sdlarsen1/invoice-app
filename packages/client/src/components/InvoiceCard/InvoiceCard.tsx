import {
  Card,
  CardContent,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Invoice } from "app/domain/entities/Invoice";
import StatusChip from "components/InvoiceCard/StatusChip";
import { useInvoiceModalContext } from "components/InvoiceModal/Provider";

const StyledCard = styled(Card)((theme) => ({
  "&hover": {
    border: "1px solid pink",
  },
}));

type P = {
  invoice: Invoice;
};

const InvoiceCard = ({ invoice }: P) => {
  const { invoiceModal } = useInvoiceModalContext();
  const handleClick = () => invoiceModal.open({ payload: {} });

  return (
    <StyledCard variant="outlined" color="background">
      <CardContent>
        <Stack spacing={2} paddingX={2} paddingY={1}>
          <Typography variant="h6" component="span">
            {invoice.billTo.name || "Anonymous"}
          </Typography>
          <Typography variant="h4" color="primary">
            {`$${invoice.total}`}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <StatusChip status={invoice.status} />
            <Tooltip title="Edit" placement="top">
              <IconButton onClick={handleClick}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default InvoiceCard;
