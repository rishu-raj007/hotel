import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import Data from "../Data.json";
import { Box } from "@mui/material";

export const Slider = () => {
  return (
    <Box sx={{height:"100vh",backgroundColor:"#979797",}}>

   
    <ReactElasticCarousel
      style={{
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "80vh",
        position: "absolute",
        top: 20,
        
        
      }}
      enableAutoPlay={true}
      enableSwipe={true}
      showArrows={false}
      itemPosition="center"
      onNextStart={Data.hotels.image}
      
    >
      {Data.hotels.map((img) => (
        <item
          style={{
            borderRadius: 40,
            boxShadow: "7px 15px 50px black",
          }}
        >
          <img src={img.image}></img>
        </item>
      ))}
    </ReactElasticCarousel>
    </Box>
  );
};
