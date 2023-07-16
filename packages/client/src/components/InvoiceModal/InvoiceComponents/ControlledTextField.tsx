import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { TextField } from "@mui/material";

type P = {
  control: Control;
  fieldName: string;
  setValue: UseFormSetValue<any>;
  label: string;
};

const ControlledTextField = ({ fieldName, control, label }: P) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            value={field.value}
            onChange={field.onChange}
            label={label}
          />
        );
      }}
    />
  );
};

export default ControlledTextField;
