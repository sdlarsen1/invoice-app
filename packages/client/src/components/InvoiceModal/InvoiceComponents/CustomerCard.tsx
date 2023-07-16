import { Control, UseFormSetValue } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import InvoiceComponent from "components/InvoiceModal/InvoiceComponents/InvoiceComponent";
import ControlledTextField from "components/InvoiceModal/InvoiceComponents/ControlledTextField";

type P = {
  control: Control;
  setValue: UseFormSetValue<any>;
  isBillTo?: boolean;
  isNew?: boolean;
};

const CustomerCard = ({ setValue, control, isBillTo, isNew = false }: P) => {
  return (
    <InvoiceComponent>
      <Stack>
        <Typography>{isBillTo ? "Bill To:" : "Bill From:"}</Typography>
        <ControlledTextField
          control={control}
          fieldName={isBillTo ? "billToName" : "billFromName"}
          setValue={setValue}
          label="Name"
        />
        <ControlledTextField
          control={control}
          fieldName={isBillTo ? "billToEmail" : "billFromEmail"}
          setValue={setValue}
          label="Email"
        />
        <ControlledTextField
          control={control}
          fieldName={isBillTo ? "billToAddress" : "billFromAddress"}
          setValue={setValue}
          label="Address"
        />
      </Stack>
    </InvoiceComponent>
  );
};

export default CustomerCard;
