import React from "react";
import buttonstyles from "./NavButton.module.css";
import { Button } from "@mui/material";

function NavButton() {
  return (
    <>
      <Button className={buttonstyles.navbuttontext}>Contact Now</Button>
    </>
  );
}

export default NavButton;
