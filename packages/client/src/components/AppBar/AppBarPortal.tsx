import { ReactNode } from "react";
import { useAppBar } from "./AppBarContext";
import { Portal } from "@mui/material";
import Header from "./Header";

type P = {
  children?: ReactNode;
};

const AppBarPortal = ({ children }: P) => {
  const appBarContext = useAppBar();
  return (
    <Portal container={appBarContext.subheaderRef?.current}>
      <Header />
      {children}
    </Portal>
  );
};

export default AppBarPortal;
