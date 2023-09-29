import React from "react";
import secondpagestyle from "./SecondPage.module.css";
import {
  Stack,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import gift from "../Assets/gift.png";

function SecondPage() {
  return (
    <Stack className={secondpagestyle.secondpagemainstack}>
      <Stack direction="row" spacing={4}>
        <div className={secondpagestyle.title1}>
          Let’s Introduce <br /> Ourself
        </div>
        <hr className={secondpagestyle.line} />
        <Stack direction="column" spacing={2}>
          <div className={secondpagestyle.title2}>Criminal Lawyer</div>
          <div className={secondpagestyle.title3}>
            Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor
            do amet sint. Velit officia consequatduis <br /> enim velit mollit
            Exercitation.
          </div>
        </Stack>
      </Stack>
      <div className={secondpagestyle.title4}>Why Choose us?</div>
      <Stack
        direction="row"
        spacing={2}
        className={secondpagestyle.secondpagesecondstack}
      >
        <div>
          <Card sx={{ maxWidth: 345 }} className={secondpagestyle.carddiv}>
            <div className={secondpagestyle.cardmedia}>
              <CardMedia
                sx={{ height: 50, width: 50 }}
                image={gift}
                title="Gift"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={secondpagestyle.text}
              >
                98% Success Rate
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={secondpagestyle.text1}
              >
                Amet minim mollit non deserunt ullamco est <br /> sit aliqua
                dolor do amet sint. Velit officia <br /> consequatduis enim
                velit mollit Exer.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className={secondpagestyle.button}>
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }} className={secondpagestyle.carddiv1}>
            <div className={secondpagestyle.cardmedia}>
              <CardMedia
                sx={{ height: 50, width: 50 }}
                image={gift}
                title="Gift"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={secondpagestyle.text}
              >
                100% Success Rate
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={secondpagestyle.text1}
              >
                Amet minim mollit non deserunt ullamco est <br /> sit aliqua
                dolor do amet sint. Velit officia <br /> consequatduis enim
                velit mollit Exer.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className={secondpagestyle.button}>
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }} className={secondpagestyle.carddiv}>
            <div className={secondpagestyle.cardmedia}>
              <CardMedia
                sx={{ height: 50, width: 50 }}
                image={gift}
                title="Gift"
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={secondpagestyle.text}
              >
                100% Success Rate
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={secondpagestyle.text1}
              >
                Amet minim mollit non deserunt ullamco est <br /> sit aliqua
                dolor do amet sint. Velit officia <br /> consequatduis enim
                velit mollit Exer.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className={secondpagestyle.button}>
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
      </Stack>
    </Stack>
  );
}

export default SecondPage;
