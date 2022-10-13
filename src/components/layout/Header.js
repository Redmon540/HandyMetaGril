import * as React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SailingIcon from "@mui/icons-material/Sailing";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SimpleBottomNavigation() {
  return (
    <Grid container justifyContent="center" sx={{ marginBottom: "30px" }}>
      <Grid container item xs={10} sx={{ marginTop: "70px" }}>
        <Grid container item xs={4} spacing={2} alignItems="center">
          <Grid item>
            <Link className="main-color" to="/home">
              HOME
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/about">
              ABOUT
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/roadmap">
              ROADMAP
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/faqs">
              FAQS
            </Link>
          </Grid>
          <Grid item>
            <Link className="main-color" to="/contact">
              TEAM
            </Link>
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
          <IconButton
            variant="text"
            color="error"
            href="https://opensea.io/"
            target="_blank"
          >
            <SailingIcon />
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            href="https://discord.gg/E222ymXmZe"
            target="_blank"
          >
            <SportsEsportsIcon />
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            href="https://twitter.com/HandyMetaGirls"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            href="https://www.instagram.com/handymetagirls/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            variant="text"
            color="error"
            href="https://www.facebook.com/profile.php?id=100084245494629"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
