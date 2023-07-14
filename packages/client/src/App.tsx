import React from "react";
import "./App.css";
import Invoicing from "./screens/Invoicing/Invoicing";
import { AppBar, IconButton, Paper } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BaseContainer from "components/BaseContainer/BaseContainer";

function App() {
  return (
    <Paper className="App">
      <AppBar position="static">
        <IconButton>
          <SmartToyIcon />
        </IconButton>
      </AppBar>
      <BaseContainer>
        <Invoicing />
      </BaseContainer>
    </Paper>
  );
}

export default App;
