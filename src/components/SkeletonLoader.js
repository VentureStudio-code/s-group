import React from "react";
import { CircularProgress, Grid } from "@mui/material";

const LoadingSkeleton = () => (
  <Grid
    lg={12}
    sx={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress color="warning" />
  </Grid>
);

export default LoadingSkeleton;
