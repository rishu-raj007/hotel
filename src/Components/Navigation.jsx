import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HotTubIcon from "@mui/icons-material/HotTub";
import { useState } from "react";
import images from "../assets/index";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  const [value, setValue] = useState();
  let val;
  return (
    <AppBar
      sx={{
        bgcolor: "#3c3c3c",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        // color: "white",
        textDecoration:"none"
      }}
    >
      <NavLink textDecoration={"none"} to="/">
        <Avatar sx={{ width: 150 }} src={images.logo} />
      </NavLink>

      <Toolbar sx={{ color: "white" }}></Toolbar>
      <Tabs
        sx={{ marginLeft: 50, color: "white" }}
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        textColor="#8d704f"
      >
        <NavLink to="./packages"  textDecoration="none" style={{color:'#FFF'}}  type="">
          <Tab label="Packages" textDecoration="none" textColor="#8d704f" />
        </NavLink>
        <Tab label="Events" />
        <NavLink to="./aboutus" type="none" style={{color:'#FFF'}}>
          <Tab label="About Us" />
        </NavLink>

        <NavLink to="./contactus" type="none" style={{color:'#FFF'}}>
          <Tab label="Contact Us" />
        </NavLink>
      </Tabs>
      <Button
        sx={{ backgroundColor: "white", margin: "auto", color: "GrayText" }}
      >
        Login
      </Button>
    </AppBar>
  );
};
