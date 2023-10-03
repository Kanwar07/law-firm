import React from "react";
import thirdpagestyle from "./ThirdPage.module.css";
import { Stack } from "@mui/material";
import image1 from "../Assets/image1.jpeg";
import image2 from "../Assets/image2.jpeg";
import image3 from "../Assets/image3.jpeg";
import image4 from "../Assets/image4.jpeg";
import image5 from "../Assets/image5.jpeg";
import image6 from "../Assets/image6.jpeg";

function ThirdPage() {
  return (
    <div className={thirdpagestyle.thirdpagemainstack}>
      <Stack direction="column">
        <div className={thirdpagestyle.text}>Area of Practices</div>
        <Stack direction="row" className={thirdpagestyle.firststack}>
          <div>
            <img src={image1} alt="Image1" className={thirdpagestyle.image1} />
          </div>
          <div>
            <img src={image2} alt="Image2" className={thirdpagestyle.image2} />
          </div>
        </Stack>
        <Stack direction="row" className={thirdpagestyle.secondstack}>
          <div>
            <img src={image3} alt="Image3" className={thirdpagestyle.image3} />
          </div>
          <div>
            <img src={image4} alt="Image4" className={thirdpagestyle.image4} />
          </div>
        </Stack>
        <Stack direction="row" className={thirdpagestyle.thirdstack}>
          <div>
            <img src={image5} alt="Image5" className={thirdpagestyle.image5} />
          </div>
          <div>
            <img src={image6} alt="Image6" className={thirdpagestyle.image6} />
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default ThirdPage;
