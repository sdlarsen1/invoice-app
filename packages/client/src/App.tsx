import React from "react";
import "./App.css";
import Invoicing from "./screens/Invoicing/Invoicing";
import { AppBar, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BaseContainer from "components/BaseContainer/BaseContainer";

function App() {
  return (
    <Paper className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start">
            <SmartToyIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Invoice-o-matic
          </Typography>
        </Toolbar>
      </AppBar>
      <BaseContainer>
        <Invoicing />
      </BaseContainer>
    </Paper>
  );
}

export default App;
