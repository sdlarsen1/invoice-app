import { InvoiceStatus } from "app/domain/constants/InvoiceStatus";
import { Chip, styled } from "@mui/material";

const PaidChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.success.light,
  borderColor: theme.palette.success.light,
}));

const LateChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.error.main,
}));

const PendingChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.info.light,
  borderColor: theme.palette.info.light,
}));

type P = {
  status: InvoiceStatus;
};

const StatusChip = ({ status }: P) => {
  switch (status) {
    case InvoiceStatus.LATE:
      return <LateChip variant="filled" label="Late" />;
    case InvoiceStatus.PAID:
      return <PaidChip variant="outlined" label="Paid" />;
    default:
      return <PendingChip variant="outlined" label="Pending" />;
  }
};

export default StatusChip;
