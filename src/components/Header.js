import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Divider,
  Drawer,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { MyColor } from "../assets/color";
import Applogo from "../assets/images/s-group-logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
function Header() { 
  const isSmallScreen = useMediaQuery('(min-width: 1160px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
console.log("location",location)
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const navLinks = [
    { text: "Home",type:"root", path: "/" },
    { text: "About the s-group",type:"null", path: "/about-the-s-group" },
    { text: "Group structure",type:"null", path: "/s-group-memberships" },
    { text: "Apply for s-group Membership",type:"null", path: "/apply-for-s-group-membership" },
    { text: "member's portal", typr:"link",  path: "https://app.glueup.com/org/s-group/about/" },
    { text: "events",type:"null", path: "/businessnetworkingevents" },
    { text: "webinars",type:"null", path: "/s-group-webinars" },
    { text: "s-travel", type:"link", path: "https://stravel.co.za/" },
  ];
console.log("portal",navLinks)

  const getHeading = (headingType) => {
    switch (headingType) {
      case '/about-the-s-group':
        return 'Meet the team';
      case '/apply-for-s-group-membership':
        return 'MEMBERSHIP APPLICATION';
      case '/businessnetworkingevents':
        return 'Events';
      case '/s-group-webinars':
        return 'Webinars';
    }
  };
  



  return (
    <Fragment>
      <Toolbar
        sx={{
          height: { xs: "4.5rem", sm: "4.5rem", md: "4.5rem", lg: "6rem" },
          background: MyColor.backgroundColor,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid2>
          <img
            onClick={()=>navigate("/")}
            src={Applogo}
            alt="s-group"
            style={{ width: "100px", height: "50px",cursor:"pointer" }}
          />
        </Grid2>

        {isSmallScreen ? (
          <Grid2>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              to="/about-the-s-group"
            >
              About the s-group
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              to="/s-group-memberships"
            >
              Group structure
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              to="/apply-for-s-group-membership"
            >
              Apply for s-group Membership
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              onClick={()=>window.open("https://app.glueup.com/org/s-group/about/" ,{target:"_blank"})}
              >
              member's portal
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              to="/businessnetworkingevents"
            >
              events
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              to="/s-group-webinars"
            >
              webinars
            </Button>
            <Button
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px",
                color: MyColor.fontcolor,
              }}
              component={Link}
              onClick={()=>window.open("https://stravel.co.za/" ,{target:"_blank"})}
               >
              s-travel
            </Button>
            <IconButton>
              <ShoppingCartIcon sx={{ color: "#fff", fontSize: "1rem" }} />
            </IconButton>
          </Grid2>
        ) : (
          <>
            <Grid2 container justifyContent="flex-end" alignItems="center">
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
              <IconButton onClick={toggleMenu} color="inherit">
                <MenuIcon />
              </IconButton>
            </Grid2>

            {menuOpen && (
              <Box
                sx={{
                  padding: 2,
                  position: "absolute",
                  top: "50px",
                  left: 0,
                  right: 0,
                  zIndex: 1000,
                }}
              >
                {" "}
                {/* Adjust 'top' based on header height */}
                <Card
                  sx={{
                    borderTopColor: MyColor.borderColor,
                    borderTopWidth: "4px",
                    background: "transparent",
                    borderRadius: "0",
                  }}
                  variant="outlined"
                >
                  <CardContent
                    sx={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                  >
                    <List>
                      {navLinks.map((link) => (
                        <>
                          <ListItem
                            button
                            key={link.text}
                            onClick={toggleMenu}
                            primaryTypographyProps={{
                              sx: {
                                textTransform: "uppercase",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                color: "black", // Default color
                                "&:hover": {
                                  background: "#fff",
                                  color: MyColor.borderColor, // Change the font color on hover
                                },
                              },
                            }}
                          >
                            {" "}
                            {/* Ensure no background color on hover */}
                            <ListItemText
                              primary={link.text}
                              primaryTypographyProps={{
                                sx: {
                                  textTransform: "uppercase",
                                  fontWeight: 600,
                                  fontSize: "0.85rem",
                                  color: "black", // Default color
                                  "&:hover": {
                                    color: MyColor.borderColor, // Change the font color on hover
                                  },
                                },
                              }}
                            />
                          </ListItem>
                          <Divider />
                        </>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            )}
          </>
        )}
      </Toolbar>
       {["/about-the-s-group","/apply-for-s-group-membership","/businessnetworkingevents", "/s-group-webinars"].indexOf(location?.pathname)>-1 && <Toolbar
          sx={{
            height: { xs: "4.5rem", sm: "4.5rem", md: "4.5rem", lg: "6rem" },
            background: MyColor.backgroundColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{fontSize:{xs:"1.5rem",sm:"2rem",md:"2.1rem",lg:"2.2rem"}}}
            gutterBottom
            fontWeight={"400"}
            textTransform={"uppercase"}
            letterSpacing={3}
            color={MyColor.borderColor}
          >
            {getHeading(location?.pathname)}
          </Typography>
        </Toolbar>}
    </Fragment>
  );
}

export default Header;
