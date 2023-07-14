import { ReactNode } from "react";
import { AppBarProvider } from "./components/AppBar/AppBarContext";

type P = {
  children: ReactNode;
};

const Providers = ({ children }: P) => {
  return <AppBarProvider>{children}</AppBarProvider>;
};

export default Providers;
