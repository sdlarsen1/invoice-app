import { Paper } from "@mui/material";
import { useAppBar } from "./AppBarContext";

const AppBarRef = () => {
  const appBarContext = useAppBar();
  return (
    <Paper
      ref={appBarContext.subheaderRef}
      sx={{
        position: "sticky",
        zIndex: "appBar",
        top: "0",
        backgroundImage: "unset",
        border: 0,
      }}
    ></Paper>
  );
};

export default AppBarRef;
