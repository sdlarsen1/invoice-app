import { Stack, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";

type P = {
  control: Control;
};

const DateRow = ({ control }: P) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" spacing={1}>
        <Typography fontWeight="bold">Invoice Date:</Typography>
        <Typography>{new Date().toLocaleString().split(", ")[0]}</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography fontWeight="bold">Due Date:</Typography>
        <Controller
          name="dueAt"
          control={control}
          render={({ field }) => {
            return <DatePicker value={field.value} onChange={field.onChange} />;
          }}
        />
      </Stack>
    </Stack>
  );
};

export default DateRow;
