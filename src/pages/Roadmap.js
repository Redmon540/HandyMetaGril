import * as React from "react";

import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";

const style = {
  section: {
    backgroundColor: "#FFE3E1",
  },
  box: {
    marginTop: "70px",
    marginBottom: "30px",
  },
  bg: {
    backgroundImage: "url('../img/faq-bg.webp')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "480px",
  },
  h1: {
    letterSpacing: "0em",
    margin: 0,
    marginTop: "40px",
    marginBottom: "40px",
    fontWeight: "bold",
    color: "#ad333c",
    font: "normal normal normal 56px/1.41em 'rozha one', serif",
    textAlign: "center",
  },
  span: {
    color: "#ad333c",
    margin: 0,
    padding: 0,
    background: "transparent",
    lineHeight: "1.8em",
    textAlign: "center",
    font: "normal normal normal 18px/1.75em avenir-lt-w01_35-light1475496, avenir-lt-w05_35-light, sans-serif",
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    borderRadius: "50%",
    width: "121px",
    height: "121px",
  },
  h2: {
    color: "#ad333c",
    textAlign: "center",
    width: "100%",
    height: "70px",
    font: "normal normal normal 20px/1.34em 'rozha one', serif",
  },
  p: {
    textAlign: "center",
    color: "#ad333c",
    font: "normal normal normal 16px/1.75em avenir-lt-w01_35-light1475496, avenir-lt-w05_35-light, sans-serif",
  },
};

export default function RoadMap() {
  return (
    <Grow in={true}>
      <section style={style.section}>
        <Grid container justifyContent="center">
          <Grid container item justifyContent="center">
            <h1 style={style.h1}>RoadMap</h1>
          </Grid>
          <Grid container justifyContent="center">
            <span style={style.span}>A sneak peak at where we’re heading</span>
          </Grid>
          <Grid container item xs={10} justifyContent="center">
            <NftBlock
              image="01.png"
              title="Phase 1: Contest of Whitelist"
              description="We will be giving away 1 WL spot every day via tweet on Twitter. The contest will run for up to 90 days which means a total of 90 WL spot will be given away."
            />
            <NftBlock
              image="02.png"
              title="Phase 2: Miss Handy"
              description="We will conduct a contest of the most gorgeous and attractive women in her profession. Members can submit their entry on Handy Meta Girls website. We will announce 20 winners of the contest and it will be fairly  judged by the team and the community."
            />
            <NftBlock
              image="03.png"
              title="Phase 3: Handy Meta Girls Game"
              description="We are developing a fashion dress-up game before the mint. This game is free-to-play for everyone and can use their cryptocurrency to buy upgrades, accessories and etc. But our NFT holders will receive various benefits such as special in-game rewards and bonuses. Coins earned from this game can be used to buy merchandise in our E-shop."
            />
            <NftBlock
              image="05.png"
              title="Phase 4: Primary Sales"
              description="The launch of 5,555 Handy Meta Girls NFT to whitelisted members and to the public."
            />
            <NftBlock
              image="06.png"
              title="Phase 5: Contest for the Best Clothes Design"
              description="Members in the community can create or suggest new clothing designs for our Handy Meta Girls NFT. The best suggestions will be rewarded."
            />
            <NftBlock
              image="07.png"
              title="Phase 6: Creation of Handy Meta Girls 2.0"
              description="Based on the community's suggestions, we will create a 500 special edition of our NFT called Handy Meta Girls 2.0 where it will be transformed into a 3D design. The first 400 will be airdropped to those who suggested the designs. While the remaining 100 will be used for giveaways and for future partnerships. "
            />
          </Grid>
        </Grid>
      </section>
    </Grow>
  );
}

const NftBlock = ({ image, title, description }) => {
  return (
    <Grid container item xs={4} justifyContent="center" style={style.box}>
      <Grid item xs={6}>
        <img alt={image} src={`../img/${image}`} style={style.img} />
        <h2 style={style.h2}>{title}</h2>
        <p style={style.p}>{description}</p>
      </Grid>
    </Grid>
  );
};
