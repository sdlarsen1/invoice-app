import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledBaseContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  overflow: "none",
  backgroundColor: theme.palette.background.default,
}));

type P = {
  children: ReactNode;
};

const BaseContainer = ({ children }: P) => {
  return <StyledBaseContainer>{children}</StyledBaseContainer>;
};

export default BaseContainer;
