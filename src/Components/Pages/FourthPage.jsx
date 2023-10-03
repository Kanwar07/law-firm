import React from "react";
import fourthpagestyle from "./FourthPage.module.css";
import { Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import image7 from "../Assets/image7.png";
import image8 from "../Assets/image8.png";
import image9 from "../Assets/image9.png";

function FourthPage() {
  return (
    <div className={fourthpagestyle.maindiv}>
      <Stack direction="column" spacing={2}>
        <Stack
          className={fourthpagestyle.firststack}
          direction="row"
          spacing={2}
        >
          <div className={fourthpagestyle.text}>
            What says our
            <br /> happy Clients
          </div>
          <Stack direction="row" spacing={4}>
            <div className={fourthpagestyle.icon1}>
              <ArrowBackIcon />
            </div>
            <div className={fourthpagestyle.icon2}>
              <ArrowForwardIcon />
            </div>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Card className={fourthpagestyle.carddiv}>
            <CardMedia
              className={fourthpagestyle.cardmedia}
              sx={{ height: 140 }}
              image={image7}
              title="pic1"
            />
            <CardContent>
              <Typography className={fourthpagestyle.text1}>
                Jane Cooper
              </Typography>
              <Typography className={fourthpagestyle.text2}>
                Ceo of Hunt
              </Typography>
              <Typography className={fourthpagestyle.text3}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </Typography>
            </CardContent>
          </Card>
          <Card className={fourthpagestyle.carddiv1}>
            <CardMedia
              className={fourthpagestyle.cardmedia}
              sx={{ height: 140 }}
              image={image8}
              title="pic1"
            />
            <CardContent>
              <Typography className={fourthpagestyle.text1}>
                Devon Lane
              </Typography>
              <Typography className={fourthpagestyle.text2}>
                Ceo of Hunt
              </Typography>
              <Typography className={fourthpagestyle.text3}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </Typography>
            </CardContent>
          </Card>
          <Card className={fourthpagestyle.carddiv}>
            <CardMedia
              className={fourthpagestyle.cardmedia}
              sx={{ height: 140 }}
              image={image9}
              title="pic1"
            />
            <CardContent>
              <Typography className={fourthpagestyle.text1}>
                Robert Fox
              </Typography>
              <Typography className={fourthpagestyle.text2}>
                Ceo of Hunt
              </Typography>
              <Typography className={fourthpagestyle.text3}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}

export default FourthPage;
