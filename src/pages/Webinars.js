// src/pages/Contact.js
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Grid2,
  Typography,
} from "@mui/material";
import { MyColor } from "../assets/color";
import Youtubesvg from "../assets/images/youtube.svg";
const webinarData = [
  {
    id: 1,
    title: "A Fire-side chat with Bob Diamond",
    imageuri: "",
    link: "https://youtube.com/watch?v=xH-g2VXxTa8",
    date: "9 November 2020",
  },
  {
    id: 2,
    title: "Muthi: South Africa’s Multi-Billion Rand Market",
    imageuri: "",
    link: "https://youtube.com/watch?v=whSavHU9Df8",
    date: "20 October 2021",
  },
  {
    id: 3,
    title: "The Youngest Self Made Billionaire in Bitcoin To Be?",
    imageuri: "",
    link: "https://youtube.com/watch?v=znwbrbOuPdQ",
    date: "6 October 2021",
  },
  {
    id: 4,
    title: "The Wolf of Wall Street",
    imageuri: "",
    link: "https://youtube.com/watch?v=YZYYz5bfK7g",
    date: "22 September 2020",
  },
  {
    id: 5,
    title: "Uranium Royalty Corp",
    imageuri: "",
    link: "https://youtube.com/watch?v=O2IYGQ-03cM",
    date: "11 February 2021",
  },
  {
    id: 6,
    title: "A Fireside Chat with Michael Beaumont",
    imageuri: "",
    link: "https://youtube.com/watch?v=rdtqH27RPSQ",
    date: "9 September 2021",
  },
  {
    id: 7,
    title: "A Fireside Chat with Dr. Corné Mulder",
    imageuri: "",
    link: "https://youtube.com/watch?v=Vz6u2BmF1BQ",
    date: "21 July 2021",
  },
  {
    id: 8,
    title: "How To Save South Africa",
    imageuri: "",
    link: "https://youtube.com/watch?v=wd3Ci2Pmurg",
    date: "4 January 2021",
  },
  {
    id: 9,
    title: "Meet Brock Pierce",
    imageuri: "",
    link: "https://youtube.com/watch?v=I4E5XsiG5wI",
    date: "11 November 2020",
  },
  {
    id: 10,
    title: "A Celebration of Women",
    imageuri: "",
    link: "https://youtube.com/watch?v=xI9tYVBWDl0",
    date: "9 August 2020",
  },
  {
    id: 11,
    title: "Sunnyside Up: A Breakfast Chat With Sports Legends",
    imageuri: "",
    link: "https://youtube.com/watch?v=AN1fxxgO9Eo",
    date: "4 November 2020",
  },
  {
    id: 12,
    title: "FUTURE HOW",
    imageuri: "",
    link: "https://youtube.com/watch?v=hrMcv3VHBHM",
    date: "5 November 2020",
  },
];

const Contact = () => {
  return (
    <Grid2>
      <Grid2>
        <Grid container spacing={1} p={2}>
          {webinarData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ActionAreaCard
                imageuri={item.imageuri}
                title={item.title}
                date={item.date}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Grid2>
      <Grid2
        p={3}
        sx={{ background: MyColor.borderColor }}
        textAlign={"center"}
      >
        <Typography
          pb={1}
          sx={{
            color: MyColor.backgroundColor,
            fontSize: {
              xs: "0.85rem",
              sm: "0.85rem",
              md: "0.9rem",
              lg: "1rem",
            },
          }}
        >
          Subscribe to our YouTube channel
        </Typography>
        <Button
          size="small"
          variant="outlined"
          sx={{
            color: MyColor.backgroundColor,
            borderColor: MyColor.backgroundColor,
            fontSize: "0.8rem",
            borderRadius: 0.5,
            textTransform: "none",
          }}
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCHGCDBM0UxfzbVKEt9pZDWw",
              {
                target: "_blank",
              }
            )
          }
        >
          Subscribe
        </Button>
      </Grid2>
    </Grid2>
  );
};

function ActionAreaCard({ imageuri, title, date, link }) {
  // Function to extract video ID from YouTube link
  const getYoutubeThumbnail = (url) => {
    const videoId = url.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`; // URL to fetch the thumbnail
  };

  return (
    <Card
      sx={{
        background: "#ECECEC",
        borderRadius: 0,
        transition: "transform 0.5s ease",
        "&:hover": {
          transform: "translateY(10px)",
        },
      }}
    >
      <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="180"
            image={getYoutubeThumbnail(link)}
            alt="Event image"
            sx={{
              width: "100%",
              objectFit: "cover",
              filter: "brightness(0.3)", // Dim the image for better contrast with the icon
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#F8D775", // Customize icon color
              fontSize: "3rem",
              opacity: 0.8,
            }}
          >
            <img src={Youtubesvg} style={{ width: "30px" }} />
          </Box>
        </Box>
        <CardContent>
          <Typography
            sx={{
              fontSize: "0.8rem",
              minHeight: "3rem",
              maxHeight: "3rem",
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: MyColor.borderColor, fontSize: "0.7rem" }}>
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Contact;
