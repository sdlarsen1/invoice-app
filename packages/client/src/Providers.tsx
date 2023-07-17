import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { Provider } from "react-redux";
import store from "redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

type P = {
  children: ReactNode;
};

const Providers = ({ children }: P) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
