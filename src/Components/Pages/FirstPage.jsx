import React from "react";
import firstpagestyle from "./FirstPage.module.css";
import { Stack } from "@mui/material";
import mainimage from "../Assets/mainimage.png";
import InputText from "../TextField/InputText";

function FirstPage() {
  return (
    <div className={firstpagestyle.maindiv}>
      <Stack direction="row" spacing={4} className={firstpagestyle.mainstack}>
        <Stack direction="column" spacing={2}>
          <div className={firstpagestyle.heading}>
            You don’t have to <br />
            <span className={firstpagestyle.heading1}>Fight them Alone.</span>
          </div>
          <div className={firstpagestyle.heading2}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            <br />
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            <br />
            eget, hac massa gravida arcu interdum proin curae.
          </div>
          <div>
            <InputText />
          </div>
        </Stack>
        <div>
          <img
            className={firstpagestyle.image1}
            src={mainimage}
            alt="IGStudio"
          />
        </div>
      </Stack>
    </div>
  );
}

export default FirstPage;
