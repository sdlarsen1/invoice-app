import InvoiceComponent from "components/InvoiceModal/InvoiceComponents/InvoiceComponent";
import { styled, TextareaAutosize, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  overflow: "scroll",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  // padding: theme.spacing(1),
  width: "100%",
  border: "none",
  // marginRight: theme.spacing(1),
}));

type P = {
  control: Control;
};

const ControlledNotesField = ({ control }: P) => {
  return (
    <InvoiceComponent>
      <Typography fontWeight="bold">Notes</Typography>
      <Controller
        name="notes"
        control={control}
        render={({ field }) => {
          return (
            <StyledTextArea
              value={field.value}
              onChange={field.onChange}
              minRows={6}
            />
          );
        }}
      />
    </InvoiceComponent>
  );
};

export default ControlledNotesField;
