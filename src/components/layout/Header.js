import * as React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SailingIcon from "@mui/icons-material/Sailing";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SimpleBottomNavigation() {
  return (
    <Grid container justifyContent="center">
      <Grid container item xs={10} sx={{ marginTop: "70px" }}>
        <Grid container item xs={4} spacing={2} alignItems="center">
          <Grid item>
            <Link className="main-color">HOME</Link>
          </Grid>
          <Grid item>
            <Link className="main-color">ABOUT</Link>
          </Grid>
          <Grid item>
            <Link className="main-color">ROADMAP</Link>
          </Grid>
          <Grid item>
            <Link className="main-color">FAQS</Link>
          </Grid>
          <Grid item>
            <Link className="main-color">TEAM</Link>
          </Grid>
        </Grid>
        <Grid container item xs={4} justifyContent={"center"}>
          <img alt="logo" src="../img/logo.jpg" />
          <Button variant="text" color="error">
            Mint
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent="right"
          alignItems="center"
          spacing={2}
        >
          <IconButton variant="text" color="error" href="https://opensea.io/">
            <SailingIcon />
          </IconButton>
          <IconButton variant="text" color="error">
            <SportsEsportsIcon />
          </IconButton>
          <IconButton variant="text" color="error">
            <TwitterIcon />
          </IconButton>
          <IconButton variant="text" color="error">
            <InstagramIcon />
          </IconButton>
          <IconButton variant="text" color="error">
            <TelegramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
