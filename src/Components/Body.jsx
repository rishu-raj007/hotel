import React, { useEffect, useState } from "react";
// import Images from "../assets/index";
// import Slider from "../component/Slider";
// import CardComponent from "../component/CardComponent";
import { Box, Typography } from "@mui/material";
import { Slider } from "../component/Slider";
import Data from "../Data.json";

export const Body = () => {
  return (
    <>
      <Box sx={{}}>
        <Slider />
      </Box>
    </>
  );
};
