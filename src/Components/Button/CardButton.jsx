import React from "react";
import { Button } from "@mui/material";
import cardButtonstyle from "./CardButton.module.css";

function CardButton() {
  return (
    <Button size="small" className={cardButtonstyle.button}>
      Read More
    </Button>
  );
}

export default CardButton;
