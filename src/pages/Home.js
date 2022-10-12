import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useOnceEffect } from "../components/common/CustomHook";
import Popover from "../components/common/Popover";

import "./Home.css";

const toTimestamp = (strDate) => {
  var datum = Date.parse(strDate);
  return datum / 1000;
};

export default function SimpleBottomNavigation() {
  const end = toTimestamp("11/11/2022 24:00:00");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");

  useOnceEffect(() => {
    const intervalId = setInterval(() => {
      remainTime(end - Math.trunc(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const remainTime = (seconds) => {
    if (Math.trunc(seconds / 86400) < 10)
      setDays("0" + Math.trunc(seconds / 86400));
    else setDays(Math.trunc(seconds / 86400));
    seconds %= 86400;

    if (Math.trunc(seconds / 3600) < 10)
      setHours("0" + Math.trunc(seconds / 3600));
    else setHours(Math.trunc(seconds / 3600));
    seconds %= 3600;

    if (Math.trunc(seconds / 60) < 10) setMins("0" + Math.trunc(seconds / 60));
    else setMins(Math.trunc(seconds / 60));
    seconds %= 60;

    if (seconds < 10) setSecs("0" + seconds);
    else setSecs(seconds);
  };

  return (
    <div>
      <section>
        <Grid container sx={{ marginTop: "30px" }}>
          <Grid container item xs={12}>
            <img alt="landing" src="../img/landing.jpg" width={"100%"} />
          </Grid>
          <Grid container alignItems={"center"} justifyContent="center">
            <Grid container item xs={6} justifyContent="center">
              <h1 className="post-title main-color">We Are Handy Meta Girls</h1>
            </Grid>
            <Grid container justifyContent="center">
              <p className="post-description main-color">
                10,000 women joined together to spread knowledge and
                experiences!
              </p>
            </Grid>
            <Button variant="outlined" color="error">
              OPENSEA
            </Button>
          </Grid>
        </Grid>
        <Grid container className="time-grid">
          <div className="time-box">
            <div className="days">
              <div className="time-number time-block-label">{days}</div>
              <div className="time-text time-block-label">Days</div>
            </div>
            <div className="separator">:</div>
            <div className="hours">
              <div className="time-number time-block-label">{hours}</div>
              <div className="time-text time-block-label">Hours</div>
            </div>
            <div className="separator">:</div>
            <div className="mins">
              <div className="time-number time-block-label">{mins}</div>
              <div className="time-text time-block-label">Mins</div>
            </div>
            <div className="separator">:</div>
            <div className="secs">
              <div className="time-number time-block-label">{secs}</div>
              <div className="time-text time-block-label">Secs</div>
            </div>
          </div>
        </Grid>
      </section>
      <section>
        <Grid container className="main-content">
          <Grid item xs={6} className="grid">
            <Grid container item xs={12} justifyContent="center">
              <h1>Handy Meta Girls Details</h1>
              <Grid item xs={7.5}>
                <span>
                  We are artists. We are visionaries. We are here to bring Handy
                  Meta Girls to planet earth. Our latest collection is born from
                  unique avatars that have been living rent-free in our
                  imagination and are ready to make their jump to the screen.
                  Handy Meta Girls are interested in the construction industry,
                  the connection of ordinary life with the metaverse. Find them
                  on the blockchain and discover your favorite characters.
                  Scroll through our site, pick your NFT and connect your wallet
                  for a valuable and safe purchase.
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className="grid">
            <img
              src="../img/IMG-20220822-WA0001.webp"
              alt="Woman in Swimsuit"
              className="img-women"
            />
          </Grid>
          <Grid item xs={6} className="grid">
            <Grid container item xs={12} justifyContent="center" spacing={5}>
              <h1>Our Founder: Maria</h1>
              <Grid item xs={7.5}>
                <span>
                  Our amazing founder who is building the Handy Meta Girls has
                  been working all her life to establish herself within the
                  space. She is from Ukraine and has spent several years of her
                  life in the USA and as of now is living in Slovakia with her
                  family making sure Handy Meta Girls are amazing!
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className="grid">
            <img
              src="../img/IMG-20220822-WA0002.webp"
              alt="founder"
              className="img-founder"
            />
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid container justifyContent="center" className="roadmap">
          <Grid container item justifyContent="center">
            <h1>RoadMap</h1>
          </Grid>
          <Grid container justifyContent="center">
            <span>A sneak peak at where we’re heading</span>
          </Grid>
          <Grid container item xs={10} justifyContent="center">
            <NftBlock
              image="01"
              title="Phase 1: Contest of Whitelist"
              description="We will be giving away 1 WL spot every day via tweet on
                    Twitter. The contest will run for up to 90 days which means
                    a total of 90 WL spot will be given away."
            />
            <NftBlock
              image="02"
              title="Phase 2: Miss Handy"
              description="We will conduct a contest of the most funniest women in her profession. Members can submit their entry on Handy Meta Girls website. We will announce 20 winners of the funniest photo and it will be judged fairly by the team and the community."
            />
            <NftBlock
              image="03"
              title="Phase 3: Handy Meta Girls Game"
              description="We are developing a fashion dress-up game before the mint. This game is free-to-play for everyone and can use their cryptocurrency to buy upgrades, accessories and etc. But our NFT holders will receive various benefits such as special in-game rewards and bonuses."
            />
            <NftBlock
              image="05"
              title="Phase 7: Launch of E-shop"
              description="The launch of 10,000 Handy Meta Girls NFT to whitelisted members and to the public."
            />
            <NftBlock
              image="04"
              title="Phase 5: Contest for the Best Clothes Design"
              description="Members in the community can create or suggest new clothing designs for our Handy Meta Girls NFT. The best suggestions will be rewarded."
            />
            <NftBlock
              image="05"
              title="Phase 6: Creation of Handy Meta Girls 2.0"
              description="Based on the community's suggestions, we will create a 500 special edition of our NFT called Handy Meta Girls 2.0. The first 400 will be airdropped to those who suggested the designs. While the remaining 100 will be used for giveaways and for future partnerships."
            />
            <NftBlock
              image="02"
              title="Phase 7: Launch of E-shop"
              description="Members of the community will be able to purchase items related to Handy Meta Girls via E-shop that we will launch."
            />
            <NftBlock
              image="01"
              title="Phase 8: Introduction to Metaverse"
              description="Handy Meta Girls NFT are prepared to be used in the metaverse."
            />
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid
          container
          className="cover-color"
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <h1>FAQs</h1>
          <span>Helpful information</span>
        </Grid>
        <Grid className="faq-bg"></Grid>
        <Grid container justifyContent="center" className="faq-box">
          <Grid item>
            <h1>Frequently asked questions</h1>
          </Grid>
          <Grid item container xs={8}>
            <Grid item xs={12}>
              <Popover
                num="01"
                label="What's an NFT?"
                description="An NFT is a “non-fungible token” which is just a complicated way of saying it’s a unique digital item that people can buy, own and trade. Think of it as a digital collectible. A lot of NFTs are just cool pieces of digital art, but some have extra utility like exclusive access to websites, communities, or other perks."
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="02"
                label="Are Handy Meta Girls NFTs a good investment?"
                description="NFTs have become an investment opportunity. Like the physical arts, it's not the ownership that matters, instead, it's the ability to attract the highest bids during sale. When you sell an NFT at a higher price than you bought it, then it's worth the investment. And with Handy Meta Girls the investment opportunities will be unreal!"
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="03"
                label="How can I buy Handy Meta Girls NFTs?"
                description="First, you need an Ethereum wallet. A popular one is MetaMask wallet - it is available as a Chrome browser or a mobile app for iOS and Android. When you install the app, you will be prompted to create a wallet that can be used to mint."
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="04"
                label="When is the Mint Date?"
                description="The date of the launch of the mint for Handy Meta Girls will be on November 11th!"
              />
            </Grid>
            <Grid item xs={12}>
              <Popover
                num="05"
                label="What will the mint price & supply be?"
                description="The official supply of Handy Meta Girls will include a unique collection of 10,000 NFTs, with a minting price of 0.11 ETH!"
              />
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

const NftBlock = ({ image, title, description }) => {
  return (
    <Grid container item xs={4} className="nft-box" justifyContent="center">
      <Grid item xs={6}>
        <img alt={image} src={`../img/${image}.webp`} />
        <h2>{title}</h2>
        <p>{description}</p>
      </Grid>
    </Grid>
  );
};
