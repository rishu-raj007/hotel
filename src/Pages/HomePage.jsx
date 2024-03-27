import React from "react";
import { Navigation } from "../Components/Navigation";
import { Body } from "../Components/Body";
import { Box, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      <Box>
      <Body />
      <Typography marginTop={70}>Welcome Boys</Typography>

        <Typography>
          Welcome to hotel Taj, You will get What you deserve
        </Typography>
      </Box>
    </>
  );
};
