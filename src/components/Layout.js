// src/components/Layout.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid2,
  IconButton,
} from "@mui/material";
import { MyColor } from "../assets/color";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <AppBar position="static">
        <Header/>
      </AppBar>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1,  }}>
        {children}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: MyColor.backgroundColor,
          color: "white",
          p: 3,
        }}
      >
         <Footer/>
      </Box>
    </Box>
  );
};

export default Layout;
