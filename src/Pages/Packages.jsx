import React from "react";
import Data from "../Data.json";
import CardComponent from "../component/CardComponent";
import { Box } from "@mui/material";

export const Packages = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        background: "#979797",
        // width: "100vw",
        padding: 5,
      }}
    >
      {Data.hotels.map((hotel) => (
        <CardComponent hotel={hotel} />
      ))}
    </Box>
  );
};
