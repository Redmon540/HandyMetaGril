import * as React from "react";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Grow from "@mui/material/Grow";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const style = {
  box: {
    width: "100%",
    height: "225px",
    backgroundColor: "#fff8e9",
  },
  h1: {
    color: "#ad333c",
    font: "normal normal normal 40px/1.35em 'rozha one', serif",
    textAlign: "center",
    marginBottom: 0,
  },
};

export default function Contact() {
  return (
    <Grow in={true}>
      <section>
        <Grid
          container
          justifyContent="center"
          direction="column"
          style={style.box}
        >
          <Grid container item xs={4} justifyContent="center">
            <h1 style={style.h1}>Contact</h1>
          </Grid>
          <Grid container item xs={4} justifyContent="center">
            <IconButton variant="text" color="success">
              <SportsEsportsIcon />
            </IconButton>
            <IconButton variant="text" color="secondary">
              <TwitterIcon />
            </IconButton>
            <IconButton variant="text" color="error">
              <InstagramIcon />
            </IconButton>
            <IconButton variant="text" color="primary">
              <TelegramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <img alt="landing" src="../img/landing.jpg" width={"100%"} />
        </Grid>
      </section>
    </Grow>
  );
}
