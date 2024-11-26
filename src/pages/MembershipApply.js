// src/pages/Contact.js
import React from "react";
import { Typography, Grid2, CardMedia, Button } from "@mui/material";
import Selite from "../assets/images/Elements-1280x529.png";
import Membershipappy from "../assets/images/applymembershiplogo.jpg";
import { MyColor } from "../assets/color";
import { justifyText } from "../helperFun";

const Contact = () => {
  return (
    <Grid2>
      <Grid2
        md={12}
        lg={12}
        sx={{
          display: { md: "flex", lg: "flex" },
          justifyContent: { md: "space-evenly", lg: "space-evenly" },
        }}
      >
        <Grid2
          md={6}
          lg={6}
          sx={{
            padding: { md: 5, lg: 3, xs: 2 },
            width: { lg: "55%", md: "55%" },
          }}
        >
          <CardMedia
            component="img"
            height="100"
            image={Selite}
            alt="Slogo"
            sx={{
              mb: 1,
              objectFit: "contain",
              width: "100%",
            }}
          />
          <Grid2 p={1}>
            <Typography sx={{ fontWeight: "600" }}>
              S-Group Membership Application Process:
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.7rem",
                  md: "0.7rem",
                  lg: "0.9rem",
                },
                pt: 1,
              }}
            >
              Application Timeframe: The membership application process for The
              S-Group typically takes approximately 5 minutes to complete.
            </Typography>
            <Typography sx={{ fontWeight: "600", pt: 2 }}>
              Terms and Conditions{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.7rem",
                  md: "0.7rem",
                  lg: "0.9rem",
                },
                pt: 1,
              }}
            >
             1.Completing the Membership Application Form: It is crucial to fill out the membership application form thoroughly and accurately. Incomplete forms may not be considered by the S-Group.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.7rem",
                  md: "0.7rem",
                  lg: "0.9rem",
                },
                pt: 1,
              }}
            >
             
            2.Information Verification: The S-Group reserves the right to verify the information provided by applicants. This ensures the credibility and authenticity of the membership applications."
              
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.7rem",
                  md: "0.7rem",
                  lg: "0.9rem",
                },
                pt: 1,
              }}
            >
              3.Application Suitability: The S-Group has the right to decline an
              application if it is deemed unsuitable. The reasons for refusal
              may not be provided to the candidate.
            </Typography>
            <Typography sx={{ fontWeight: "600", pt: 2 }}>
              Membership Details:
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.7rem",
                  md: "0.7rem",
                  lg: "0.9rem",
                },
                pt: 1,
              }}
            >
              1. The Membership fee: The S-Group operates on a
              subscription-based platform, where members are required to pay an
              annual membership fee upon activation of their membership. This
              fee is non-refundable.Database and Member Directory: All
              successful membership applications will be stored in the S-Group’s
              database and uploaded onto their member directory. This directory
              serves as a platform for members to connect and collaborate.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.7rem",
                  md: "0.7rem",
                  lg: "0.9rem",
                },
                pt: 1,
              }}
            >
              It is essential for prospective members to carefully review and
              understand these terms before proceeding with their application to
              avoid any misunderstandings or disputes.
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 md={6} lg={6} sx={{ width: { lg: "45%", md: "45%" } }}>
          <CardMedia
            component="img"
            height={"400"}
            image={Membershipappy}
            alt="Slogo"
            sx={{
              objectFit: {
                lg: "cover",
                md: "cover",
                sm: "contain",
                xs: "contain",
              },
              width: "100%",
              height: { lg: "38rem", md: "45rem", sm: "100%", xs: "100%" },
            }}
          />
        </Grid2>
      </Grid2>
      <Grid2 sx={{ background: "#ECECEC", paddingLeft: { lg: 4 } }} p={2}>
        <Button
          size="small"
          variant="outlined"
          sx={{
            color: MyColor.backgroundColor,
            borderColor: MyColor.backgroundColor,
            fontSize: "1rem",
          }}
          onClick={() =>
            window.open("https://app.glueup.com/org/s-group/memberships/", {
              target: "_blank",
            })
          }
        >
          APPLY FOR MEMBERSHIP
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Contact;
