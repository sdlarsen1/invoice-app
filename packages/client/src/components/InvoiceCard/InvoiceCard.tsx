import {
  Box,
  Card,
  CardContent,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { Invoice } from "app/domain/entities/Invoice";
import StatusChip from "components/InvoiceCard/StatusChip";
import { useInvoiceModalContext } from "components/InvoiceModal/Provider";

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  minWidth: 200,
  minHeight: 220,
  border: "1px solid transparent",
  ":hover": {
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
  },
}));

type P = {
  invoice: Invoice;
};

const InvoiceCard = ({ invoice }: P) => {
  const { invoiceModal } = useInvoiceModalContext();
  const handleClick = () => invoiceModal.open({ payload: invoice });

  return (
    <StyledCard variant="elevation" color="background" onClick={handleClick}>
      <Tooltip title="Click to view invoice" placement="top" enterDelay={1000}>
        <CardContent>
          <Typography variant="h6" component="span">
            {invoice.billTo.name || "Anonymous"}
          </Typography>
          <Typography variant="h4" color="primary" marginY={4}>
            {`$${invoice.total}`}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <StatusChip status={invoice.status} />
          </Box>
        </CardContent>
      </Tooltip>
    </StyledCard>
  );
};

export default InvoiceCard;
