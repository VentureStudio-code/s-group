import React from "react";
import { Button, Grid, Grid2, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { MyColor } from "../assets/color";
import Fullcalander from "../components/Fullcalander";

const eventsData = [
  {
    id: 1,
    imageurl: require("../assets/images/Eventsdefault.png"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING ALL-WHITE 2024 VIDEO",
    date: "30 NOVEMBER 2024",
  },
  {
    id: 2,
    imageurl: require("../assets/images/Eventsdefault.png"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING ALL-WHITE 2024",
    date: "30 NOVEMBER 2024",
  },
  {
    id: 3,
    imageurl: require("../assets/images/Eventsdefault.png"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING: HALO 2024 VIDEO",
    date: "29 NOVEMBER 2024",
  },
  {
    id: 4,
    imageurl: require("../assets/images/Eventsdefault.png"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING: HALO 2024",
    date: "29 NOVEMBER 2024",
  },
  {
    id: 5,
    imageurl: require("../assets/images/events5.jpg"),
    titie:
      "S-GROUP BUSINESS NETWORKING: STRATEGIES FOR BUILDING HIGH-PERFORMANCE WINNING TEAMS 2024 VIDEO",
    date: "28 AUGUST 2024",
  },
  {
    id: 6,
    imageurl: require("../assets/images/events6.jpg"),
    titie:
      "S-GROUP BUSINESS NETWORKING: STRATEGIES FOR BUILDING HIGH-PERFORMANCE WINNING TEAMS 2024",
    date: "28 AUGUST 2024",
  },
  {
    id: 7,
    imageurl: require("../assets/images/events7.jpg"),
    titie: "S-GROUP BUSINESS NETWORKING: THRIVING AMIDST TURBULENCE 2024 VIDEO",
    date: "23 MAY 2024",
  },
  {
    id: 8,
    imageurl: require("../assets/images/events8.jpg"),
    titie:
      "S-GROUP BUSINESS NETWORKING: THRIVING AMIDST TURBULENCE DINNER GALA 2024",
    date: "23 MAY 2024",
  },
  {
    id: 9,
    imageurl: require("../assets/images/events9.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING ALL-WHITE 2023 VIDEO",
    date: "25 NOVEMBER 2023",
  },
  {
    id: 10,
    imageurl: require("../assets/images/events10.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING ALL-WHITE 2023",
    date: "25 NOVEMBER 2023",
  },
  {
    id: 11,
    imageurl: require("../assets/images/events11.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING 80’S PADEL 2023 VIDEO",
    date: "24 NOVEMBER 2023",
  },
  {
    id: 12,
    imageurl: require("../assets/images/events12.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING 80’S PADEL 2023",
    date: "24 NOVEMBER 2023",
  },
  {
    id: 13,
    imageurl: require("../assets/images/events13.jpg"),
    titie:
      "S-GROUP BUSINESS NETWORKING GOLF DAY AND CASINO ROYALE, STEYN CITY JHB VIDEO",
    date: "16 AUGUST 2023",
  },
  {
    id: 14,
    imageurl: require("../assets/images/events14.jpg"),
    titie:
      "S-GROUP BUSINESS NETWORKING GOLF DAY AND CASINO ROYALE, STEYN CITY JHB",
    date: "16 AUGUST 2023",
  },
  {
    id: 15,
    imageurl: require("../assets/images/events15.jpg"),
    titie: "S-GROUP BUSINESS NETWORKING CASINO ROYALE 2023 VIDEO",
    date: "26 MAY 2023",
  },
  {
    id: 16,
    imageurl: require("../assets/images/events16.jpg"),
    titie: "S-GROUP BUSINESS NETWORKING CASINO ROYALE 2023 VIDEO",
    date: "26 MAY 2023",
  },
  {
    id: 17,
    imageurl: require("../assets/images/events17.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING ALL-WHITE 2022",
    date: "26 NOVEMBER 2022",
  },
  {
    id: 18,
    imageurl: require("../assets/images/events18.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING ALL-WHITE 2022 VIDEO",
    date: "26 NOVEMBER 2022",
  },
  {
    id: 19,
    imageurl: require("../assets/images/events19.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING 2022",
    date: "25 NOVEMBER 2022",
  },
  {
    id: 20,
    imageurl: require("../assets/images/events20.png"),
    titie: "S-GROUP BUSINESS NETWORKING STEYN CITY, JHB VIDEO",
    date: "26 OCTOBER 2022",
  },
  {
    id: 21,
    imageurl: require("../assets/images/events21.jpg"),
    titie: "S-GROUP BUSINESS NETWORKING STEYN CITY, JHB 2022",
    date: "26 OCTOBER 2022",
  },
  {
    id: 22,
    imageurl: require("../assets/images/events22.jpg"),
    titie: "S-GROUP BUSINESS NETWORKING BLACK-TIE GALA DINNER CPT 2022",
    date: "4 AUGUST 2022",
  },
  {
    id: 23,
    imageurl: require("../assets/images/events23.jpeg"),
    titie: "S-GROUP BUSINESS NETWORKING CPT 2021",
    date: "28 OCTOBER 2022",
  },
  {
    id: 24,
    imageurl: require("../assets/images/events24.jpeg"),
    titie: "S-GROUP BUSINESS NETWORKING JHB 2021",
    date: "28 NOVEMBER 2022",
  },
  {
    id: 25,
    imageurl: require("../assets/images/events25.jpeg"),
    titie: "S-GROUP BUSINESS NETWORKING CPT 2020",
    date: " 27 October 2020",
  },
  {
    id: 26,
    imageurl: require("../assets/images/events26.jpeg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING 2021",
    date: " 27 November 2021",
  },
  {
    id: 27,
    imageurl: require("../assets/images/events27.jpg"),
    titie: "S-GROUP SOCIAL BUSINESS NETWORKING 2020 VIDEO",
    date: "27 – 29 November 2020",
  },
  {
    id: 28,
    imageurl: require("../assets/images/events28.jpg"),
    titie: "S-GROUP WOMEN BREAST CANCER AWARENESS HIGH TEA",
    date: " 1 November 2020",
  },
  {
    id: 29,
    imageurl: require("../assets/images/events29.jpeg"),
    titie: "S-GROUP WOMEN AND JENNA CLIFFORD LUNCHEON",
    date: "11 October 2020",
  },
  {
    id: 30,
    imageurl: require("../assets/images/events30.jpg"),
    titie: "STAR FOR LIFE CHARITY VIDEO",
    date: "8 February 2020",
  },
];

const Contact = () => {
  return (
    <Grid2>
      <Grid container spacing={1} p={2}>
        {eventsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ActionAreaCard
              imageuri={item.imageurl}
              title={item.titie}
              date={item.date}
            />
          </Grid>
        ))}
      </Grid>
      <Grid2 p={10} sx={{ background: MyColor.backgroundColor }} textAlign={'center'}>
        <Typography pb={3} sx={{color:MyColor.borderColor, fontSize:{xs:"1.2rem",sm:"1.2rem",md:"1.4rem",lg:"1.5rem"}}}>UPCOMING EVENTS</Typography>
        <Button
          size="small"
          variant="outlined"
          sx={{
            color: "#f7f7f7",
            borderColor: "#f7f7f7",
            fontSize: "1rem",
          }}
          onClick={() =>
            window.open("https://app.glueup.com/org/s-group/", {
              target: "_blank",
            })
          }
        >
          CLICK HERE TO RSVP
        </Button>
      </Grid2>
      <Grid2 p={3}>
     <Fullcalander/>
      </Grid2>
    </Grid2>
  );
};

function ActionAreaCard({ imageuri, title, date }) {
  return (
    <Card
      sx={{
        background: "#ECECEC",
        borderRadius: 0,
        transition: "transform 0.5s ease",
        "&:hover": {
          transform: "translateY(10px)", // Moves the card down by 5px on hover
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={imageuri}
          alt="Event image"
          sx={{
            width: "100%",
            objectFit: "cover",
          }}
          // onClick={() => {
          //   window.open("https://s-group.co.za/s-group-social-business-networking-all-white-villa-event-2024-video/", "_blank"); // Replace with your desired URL
          // }}
          onClick={() => {
            window.location.href = "https://s-group.co.za/s-group-social-business-networking-all-white-villa-event-2024-video/"; // Replace with your desired URL
          }}
        />
        <CardContent>
          <Typography
            sx={{
              fontSize: "0.8rem",
              minHeight: "4.5rem",
              maxHeight: "4.5rem",
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
