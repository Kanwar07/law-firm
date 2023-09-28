import React from "react";
import firstpagestyle from "./FirstPage.module.css";
import { Stack } from "@mui/material";
import mainimage from "../Assets/mainimage.png";

function FirstPage() {
  return (
    <div className={firstpagestyle.maindiv}>
      <Stack direction="row" spacing={4} className={firstpagestyle.mainstack}>
        <Stack direction="column" spacing={2}>
          <div className={firstpagestyle.heading}>
            You don’t have to{" "}
            <span className={firstpagestyle.heading1}>Fight them Alone.</span>
          </div>
          <div className={firstpagestyle.heading2}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </div>
          <div>3</div>
        </Stack>
        <div>
          <img src={mainimage} alt="IGStudio" />
        </div>
      </Stack>
    </div>
  );
}

export default FirstPage;
