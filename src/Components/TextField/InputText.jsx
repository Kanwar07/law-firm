import React from "react";
import { Box, TextField, InputAdornment, Button } from "@mui/material";
import inputstyles from "./InputText.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function InputText() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "85%",
        padding: "2rem 0rem",
      }}
    >
      <TextField
        className={inputstyles.inputfield}
        fullWidth
        id="fullWidth"
        placeholder="Enter your eamil address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button className={inputstyles.button}>Let's Talk</Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default InputText;
