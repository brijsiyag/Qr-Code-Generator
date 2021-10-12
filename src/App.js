import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import "./App.css";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Navbar from "./Navbar/Navbar";
import Button from "@mui/material/Button";
import Footer from "./Footer/Footer";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function App() {
  const [input, setInput] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const saveBtnClickHandler = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const PromptClickHandler = async () => {
    const canvas = await html2canvas(document.body.querySelector("#qrcode"));
    const link = document.createElement("a");
    link.setAttribute("download", `${name}.jpg`);
    link.setAttribute("href", canvas.toDataURL("image/jpg"));
    link.click();
    setOpen(false);
    setName("");
    setInput("");
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <TextField
          className="input"
          id="outlined-basic"
          label="Url / Text"
          variant="outlined"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="download-btn">
          <Button onClick={saveBtnClickHandler} variant="contained">
            <SaveAltIcon /> Save
          </Button>
        </div>
        <div id="qrcode">
          <QRCode
            value={input}
            size="400px"
            renderAs="svg"
            style={{ padding: "20px" }}
            className="qrcode"
            includeMargin
            level="H"
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Download</DialogTitle>
        <DialogContent>
          <DialogContentText minWidth="400px">
            Please Enter QrCode File Name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File Name"
            type="email"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={PromptClickHandler}>Download</Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </>
  );
}
export default App;
