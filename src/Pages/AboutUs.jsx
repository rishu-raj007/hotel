import { Box, Typography } from "@mui/material";
import React from "react";

export const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor:"#979797",  display:"flex", height:"100vh"}}>
    <Box
      style={{
        position:"relative",
        left:"0px",
        top:10,
        marginLeft:10,
        marginTop:60,
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",

        // width: "100vw",
        // height: "100vh",
        backgroundColor: "GrayText",
        width: 600,
          height: 300,
          boxShadow: "-10px 10px 15px #979797",
          borderRadius: 20,
      }}
    >
      <Box
        sx={{
      
          marginLeft:"-20px",
          tabSize: 100,
          // backgroundColor: "#4d93c2",
          width: 500,
          height: 300,
          display: "flex",
          flexDirection: "",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        
          <Typography
          
            fontSize={40}
            fontFamily={'"Apple Color Emoji"'}
            color={"#50351c"}
            // sx={{ marginLeft: 10, marginRight: 10 }}
          >
            Welcome to Hotel Taj
          </Typography>
          <Typography
            fontSize={20}
            fontFamily={"cursive"}
            color={"burlywood"}
            sx={{ textWrap:"wrap", marginLeft:10}}
          >
            At Hotel Taj, we believe that every journey should be an
            unforgettable experience. From the moment you step through our
            doors, our mission is to provide you with unparalleled hospitality,
            comfort, and luxury.
          </Typography>
        
      </Box>

    </Box>
    <Box
      style={{
        marginLeft:10,
        marginTop:70,
        position:"relative",
        left:"1px",
        top:150,
        backgroundColor: "GrayText",
        width: 600,
          height: 300,
          boxShadow: "-10px 10px 15px #979797",
          borderRadius: 20,
          // position:"relative"
          
      }}
    >
      <Box
        sx={{
        
          marginLeft:"-20px",
          tabSize: 100,
          // backgroundColor: "#4d93c2",
          width: 500,
          height: 300,
          display: "flex",
          flexDirection: "",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        
          <Typography
          
            fontSize={40}
            fontFamily={'"Apple Color Emoji"'}
            color={"#50351c"}
            // sx={{ marginLeft: 10, marginRight: 10 }}
          >
            Our Story
          </Typography>
          <Typography
            fontSize={20}
            fontFamily={"cursive"}
            color={"burlywood"}
            sx={{ textWrap:"wrap", marginLeft:10}}
          >
            Established 2024, Hotel Taj has been dedicated to redefining the hospitality industry with our commitment to excellence and passion for service. What began as a single boutique hotel has now grown into a prestigious chain known for its exceptional accommodations, world-class amenities, and personalized guest experiences.
          </Typography>
        
      </Box>

    </Box>
    <Box
      style={{
        marginLeft:10,
        marginTop:70,
        position:"relative",
        left:-4,
        top:300,
        backgroundColor: "GrayText",
        width: 600,
          height: 300,
          boxShadow: "-10px 10px 15px #979797",
          borderRadius: 20,
      }}
    >
      <Box
        sx={{
          
          marginLeft:"-20px",
          tabSize: 100,
          // backgroundColor: "#4d93c2",
          width: 500,
          height: 300,
          display: "flex",
          flexDirection: "",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        
          <Typography
          
            fontSize={40}
            fontFamily={'"Apple Color Emoji"'}
            color={"#50351c"}
            // sx={{ marginLeft: 10, marginRight: 10 }}
          >
            Our Properties
          </Typography>
          <Typography
            fontSize={20}
            fontFamily={"cursive"}
            color={"burlywood"}
            sx={{ textWrap:"wrap", marginLeft:10}}
          >
            With Multiple properties located in Hazaribagh, Hotel Taj offers a diverse range of accommodations to suit every traveler's needs. Whether you're seeking a luxurious resort getaway, a cozy boutique hotel, or a convenient urban retreat, you'll find it within our collection.
          </Typography>
        
      </Box>

    </Box>
    </Box>

  );
};
