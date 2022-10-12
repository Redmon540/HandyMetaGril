import * as React from "react";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";

export default function SimpleBottomNavigation() {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        className="footer-contact"
        direction="column"
      >
        <Grid container item xs={4} justifyContent="center">
          <h1>Contact</h1>
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
      <Grid container justifyContent="center" className="footer-us">
        <h1>Handy Meta Girls</h1>
      </Grid>
    </div>
  );
}
