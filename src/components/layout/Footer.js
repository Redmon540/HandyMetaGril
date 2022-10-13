import * as React from "react";

import Grid from "@mui/material/Grid";

const style = {
  grid: {
    width: "100%",
    height: "120px",
    color: "#ad333c",
    backgroundColor: "#ffd1d1",
  },
  h1: {
    fontWeight: "bold",
    color: "#ad333c",
    font: "normal normal normal 22px/1.41em 'rozha one', serif",
    margin: "auto",
    textAlign: "center",
  },
};

export default function SimpleBottomNavigation() {
  return (
    // <div>
    <Grid container justifyContent="center" style={style.grid}>
      <h1 style={style.h1}>Handy Meta Girls</h1>
    </Grid>
    // </div>
  );
}
