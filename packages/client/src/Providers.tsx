import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { Provider } from "react-redux";
import store from "redux/store";

type P = {
  children: ReactNode;
};

const Providers = ({ children }: P) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
