import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";

type P = {
  children: ReactNode;
};

const Providers = ({ children }: P) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
