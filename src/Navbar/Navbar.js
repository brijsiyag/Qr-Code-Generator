import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import "./Navbar.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <QrCode2Icon />{" "}
            <span className="logo-holder">QrCode Generator</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
