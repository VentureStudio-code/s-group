// src/pages/Contact.js
import React, { useState } from "react";
import { Box, CardMedia, Divider, Grid, Grid2, Typography } from "@mui/material";
import { MyColor } from "../assets/color";
import Applogo from "../assets/images/s-group-logo.png";
import myImage from "../assets/images/groupstructureback.jpeg";
import Selite from "../assets/images/s-elite.png";
import Sconnect from "../assets/images/SConnectwhite.png";

import { Card, CardContent } from "@mui/material";
import { margin, styled } from "@mui/system";

const hoverCardData = [
  {
    id: 1,
    heading: "S-Vest Global",
    text: "Exchange of trading & investment ideas – specific thesis, trades or stock picking + your rationale.",
    logo: require("../assets/images/svestglobal2.png"),
  },
  {
    id: 2,
    heading: "S-Vest SA",
    text: "Exchange of SA trading & investment ideas – specific thesis, trades or stock picking + your rationale.",
    logo: require("../assets/images/svestsouthafrica.png"),
  },
  {
    id: 3,
    heading: "S-Biz Global",
    text: "Where our global entrepreneurs and corporate chieftains get to connect and make things happen.",
    logo: require("../assets/images/sbizglobal.png"),
  },
  {
    id: 4,
    heading: "S-Biz SA",
    text: "Where our entrepreneurs and corporate chieftains get to connect and make things happen.",
    logo: require("../assets/images/sbizsouthafrica.png"),
  },
  {
    id: 5,
    heading: "S-Connect Africa",
    text: "S-Connect Sub-Saharan Africa is a Pan-African group, created to expand networks and connect members for the greater purpose of promoting Inter-African trade in order to grow the African economy.",
    logo: require("../assets/images/sconnectsubsaharanafrica.png"),
  },
];

const hoverCardPremiumData = [
  {
    id: 1,
    heading: "S-Vest Global",
    text: "S-Connect Travel Africa is a key travel group for business owners and marketeers - ranging from private airlines to online experts in order to facilitate a dynamic travel group.",
    logo: require("../assets/images/tierpremium1.jpg"),
  },
  {
    id: 2,
    heading: "S-Vest SA",
    text: "S-Connect Women is for women in business to encourage the development of mutually beneficial professional and personal relationships. Our platform is for dynamic and inspirational women to expand their networks globally, to provide wisdom, insights and help one another advance and",
    logo: require("../assets/images/tierpremium2.png"),
  },
  {
    id: 3,
    heading: "S-Biz Global",
    text: "S-Connect Crypto and Forex serves as a dedicated space for knowledge-sharing and indepth trade discussions, focusing on the intricacies of cryptocurrency trading, and blockchain technology. Additionally, it caters to the world of Forex trading, providing insights into trading various international currencies and understanding global currency markets. Our platform is designed to keep you up-todate on the ever-evolving landscapes of both cryptocurrency and Forex markets.",
    logo: require("../assets/images/tierpremium3.png"),
  },
  {
    id: 4,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/tierpremium4.jpg"),
  },
 
];

const hoverCardPremiumDatamulti = [
  {
    id: 1,
    heading: "S-Vest Global",
    text: "S-Connect Travel Africa is a key travel group for business owners and marketeers - ranging from private airlines to online experts in order to facilitate a dynamic travel group.",
    logo: require("../assets/images/groupstructure/multiimage1.jpg"),
  },
  {
    id: 2,
    heading: "S-Vest SA",
    text: "S-Connect Women is for women in business to encourage the development of mutually beneficial professional and personal relationships. Our platform is for dynamic and inspirational women to expand their networks globally, to provide wisdom, insights and help one another advance and",
    logo: require("../assets/images/groupstructure/multiimage2.jpg"),
  },
  {
    id: 3,
    heading: "S-Biz Global",
    text: "S-Connect Crypto and Forex serves as a dedicated space for knowledge-sharing and indepth trade discussions, focusing on the intricacies of cryptocurrency trading, and blockchain technology. Additionally, it caters to the world of Forex trading, providing insights into trading various international currencies and understanding global currency markets. Our platform is designed to keep you up-todate on the ever-evolving landscapes of both cryptocurrency and Forex markets.",
    logo: require("../assets/images/groupstructure/multiimage3.jpg"),
  },
  {
    id: 4,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage4.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage5.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage6.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage7.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage8.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage9.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage10.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage11.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage12.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage13.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage14.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage15.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage16.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage17.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage18.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage19.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage20.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage21.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage22.jpeg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage23.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage24.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage25.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage26.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage27.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage28.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage29.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage30.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage31.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage32.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage33.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage34.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage35.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage36.jpg"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage37.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage38.png"),
  },
  {
    id: 5,
    heading: "S-Biz SA",
    text: "S-Connect Rugby provides players with the opportunity to network with industry leaders – and provides industry leaders with an incredible opportunity to not only have the players market their businesses and brands but also to offer the players mentorship, financial insights, business internships and other practical means of supporting players off the field to ease the transition into post professional rugby careers.",
    logo: require("../assets/images/groupstructure/multiimage39.png"),
  },
 
];

const Contact = () => {
  return (
    <Grid2>
      <Grid2>
        <BackgroundImageWithText />
      </Grid2>
      <Grid2>
        <Sectionone />
      </Grid2>
      <Grid2>
        <Sectiontwo />
      </Grid2>
      <Grid2>
        <Sectionthree />
      </Grid2>
      <Grid2>
        <Sectionfour />
      </Grid2>
      <Grid2>
        <Sectionfive />
      </Grid2>
    </Grid2>
  );
};

export default Contact;

const BackgroundImageWithText = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `
          linear-gradient(180deg, rgba(11, 20, 46, 0.82) 26%, rgba(11, 20, 46, 0.35) 100%),
          url(${myImage})
        `,
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden", // Ensures no scrollbars appear
      }}
    >
      {/* Overlay Icon and Text */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img
          src={Applogo}
          alt="s-group"
          style={{ width: "100%", height: "5rem" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          width: "80%",
          p: 0.5,
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          border: `1px solid ${MyColor.borderColor}`,
        }}
      >
        <Typography variant="h1" fontSize={"1.7rem"} letterSpacing={0.5}>
          CONNECTING THE WORLD
        </Typography>
      </Box>
    </Box>
  );
};

const Sectionone = () => {
  return (
    <Grid2 sx={{ p: 7, background: "#ECECEC" }}>
      <Grid2>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "400",
            textTransform: "uppercase",
            p: 2,
          }}
        >
          Tier 1
        </Typography>
      </Grid2>
      <Divider />
      <Grid2 p={4}>
        <CardMedia
          component="img"
          height="100"
          image={Selite}
          alt="Slogo"
          sx={{
            objectFit: "contain",
            width: "100%",
          }}
        />
      </Grid2>
      <Grid2>
        <Typography sx={{ paddingInline: 5, fontSize: "0.85rem" }}>
          Our premium global investment groups, S-Vest 2.0 and S-Vest SA,
          provide an exclusive platform for members to engage in daily trades
          and investment opportunities. These groups are carefully curated by a
          select group of professional contributors who offer their expert
          insights, entry and exit points, and in-depth market analysis, with a
          primary focus on South African and US equities. By joining these
          groups, members gain access to invaluable information that can have a
          direct impact on their financial decisions. The value of being a part
          of these groups is quantifiable as members receive expert advice and
          strategies that can lead to profitable outcomes.
        </Typography>
        <Typography sx={{ paddingInline: 5, pt: 1, fontSize: "0.85rem" }}>
          As a special benefit, membership in the S-Vest SA group channel, which
          specifically focuses on trading in the Johannesburg Stock Exchange
          (JSE), is complimentary with membership in S-Vest 2.0. This
          combination provides members with an expanded range of insights and
          opportunities in the South African market, enhancing their potential
          for success.
        </Typography>
        <Typography sx={{ paddingInline: 5, pt: 1, fontSize: "0.85rem" }}>
          In addition to our investment groups, we also offer premium business
          groups, namely S-Biz South Africa and S-Biz Global, designed to cater
          to the needs of entrepreneurs and corporate leaders. These groups
          provide a dynamic platform for members to connect, fostering mutually
          beneficial relationships. Within these groups, members can find
          suppliers, offer services, exchange essential contacts and insights,
          and explore new and innovative approaches to grow their businesses and
          elevate their professional careers.
        </Typography>
        <Typography sx={{ paddingInline: 5, pt: 1, fontSize: "0.85rem" }}>
          By being a part of S-Biz, members gain access to a dynamic community
          of like-minded professionals who are driven by success and
          collaboration. Through engaging in meaningful discussions and seeking
          partnerships, members can unlock a wealth of opportunities and gain
          access to valuable resources that are crucial for driving business
          growth. The S-Biz community serves as a catalyst for expansion,
          providing the support and connections needed to thrive in today’s
          competitive business landscape.
        </Typography>
      </Grid2>
    </Grid2>
  );
};

const Sectionthree = () => {
  return (
    <Grid2 sx={{ background: "#0B142E " }}>
      <Grid2 p={5}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#ECECEC",
            fontSize: "2rem",
            fontWeight: "400",
            textTransform: "uppercase",
            p: 2,
          }}
        >
          Tier 2 Premium
        </Typography>
        <Divider
          sx={{ color: MyColor.borderColor, borderColor: MyColor.borderColor }}
        />
      </Grid2>
      <Grid2 sx={{ p: 3 }}>
        {" "}
        <CardMedia
          component="img"
          height="100"
          image={Sconnect}
          alt="Slogo"
          sx={{
            objectFit: "contain",
            width: "100%",
          }}
        />
      </Grid2>
      <Grid2 p={4}>
        <Typography
          sx={{
            paddingInline: 5,
            pt: 2,
            fontSize: "0.85rem",
            color: "#ECECEC",
          }}
        >
          Our S-Connect groups are designed to cater to specific sectors,
          interests, or locations. These groups allow our members to engage in
          discussions, share insights, and debate topics that are strictly
          relevant to the group’s description. For instance, we have S-Connect
          Africa, S-Connect London, S-Connect Women, and S-Connect Tech, to name
          a few. Each group provides a platform for members to connect both
          professionally and socially.
        </Typography>
        <Typography
          sx={{
            paddingInline: 5,
            pt: 2,
            fontSize: "0.85rem",
            color: "#ECECEC",
          }}
        >
          These groups are not just about networking, but are also dedicated to
          engaging in meaningful projects. We are committed to expanding the
          engagement of foreign investment on the African Continent. Together,
          we strive to build a better world, make a difference in the lives of
          others, and pay the goodness forward.
        </Typography>
        <Typography
          sx={{
            paddingInline: 5,
            pt: 2,
            fontSize: "0.85rem",
            color: "#ECECEC",
          }}
        >
          Our platforms foster an environment where members can collaborate and
          contribute to initiatives aimed at creating positive change. We
          believe in the power of collective effort and the impact that can be
          achieved when like-minded individuals come together with a shared
          vision.
        </Typography>
        <Typography
          sx={{
            paddingInline: 5,
            pt: 2,
            fontSize: "0.85rem",
            color: "#ECECEC",
          }}
        >
          By actively participating in our S-Connect groups, members have the
          opportunity to connect with experts in their respective fields, gain
          valuable insights, and create meaningful connections with others who
          share their passions and interests. Together, we work towards creating
          a better future for ourselves, our communities, and the world at
          large.
        </Typography>
      </Grid2>
    </Grid2>
  );
};



const Sectionfive = () => {
  return (
    <>
    <Grid2 sx={{ background: "#0B142E ", p: 7 }}>
      <Grid2 p={5}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#ECECEC",
            fontSize: "2rem",
            fontWeight: "400",
            textTransform: "uppercase",
            p: 2,
          }}
        >
          Tier 2
        </Typography>
        <Divider
          sx={{ color: MyColor.borderColor, borderColor: MyColor.borderColor }}
        />
      </Grid2>
    </Grid2>
      <Grid2>
        <Sectionfivechild/>
      </Grid2>
      </>
  );
};

const Sectiontwo = () => {
  return (
    <Grid2 container sx={{display:{lg:"flex"}}} lg={12}>
      {hoverCardData.map((item, index) => (
        <Grid  item xs={12} sm={6} md={4} lg={3} key={index}>
           <HoverCard item={item}/>
        </Grid>
      ))}
    </Grid2>
  );
};


const HoverEffectCard = styled(Card)(({ theme }) => ({
  width: "100%", // Full width of its parent
  height: "98%", 
    // Fixed height
    margin: 5,
  background: "#ECECEC",
  borderRadius: "0px !important",
  boxShadow: "none",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(15px)", // Moves the card down on hover
  },
  [theme.breakpoints.up("xs")]: {
    width: "99%",
    margin: 2
  },
  [theme.breakpoints.up("md")]: {
    width: 300, // Adjusts width for small screens
  },
  [theme.breakpoints.up("sm")]: {
    width:  300, // Adjusts width for small screens
  },
  [theme.breakpoints.up("lg")]: {
    width: window.innerWidth/5.15, // Adjusts width for small screens
  },
}));

const HoverCard = ({ item }) => {
  return (
    <HoverEffectCard>
      <Grid2 p={3}>
        <CardMedia
          component="img"
          height="50"
          image={item.logo}
          alt="Slogo"
          sx={{
            objectFit: "contain",
            width: "100%",
          }}
        />
      </Grid2>
      <CardContent
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: MyColor.borderColor, textAlign: "center" }}
        >
          {item.heading}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: "0.75rem", textAlign: "center", pt: 1.1 }}
        >
          {item.text}
        </Typography>
      </CardContent>
    </HoverEffectCard>
  );
};

const Sectionfour = () => {
  return (
    <Grid2 container >
      {hoverCardPremiumData.map((item, index) => (
        <Grid2  item xs={12} sm={6} md={4} key={index}>
         <FlipCard 
        image={item.logo} // Replace with your image URL
        text={item.text}
      /> 
        </Grid2>
      ))}
    </Grid2>
  );
};
const Sectionfivechild = () => {
  return (
    <Grid2 container>
      {hoverCardPremiumDatamulti.map((item, index) => (
        <Grid2  item xs={12} sm={6} md={4}  key={index}>
         <FlipCardmulti 
        image={item.logo} // Replace with your image URL
        text={item.text}
      /> 
        </Grid2>
      ))}
    </Grid2>
  );
};

const FlipCard = ({ image, text }) => {
  const [isFlipped, setIsFlipped] = useState(false); // State to manage flip

  const handleMouseEnter = () => {
    setIsFlipped(true); // Flip the card on mouse enter
  };

  const handleMouseLeave = () => {
    setIsFlipped(false); // Flip back on mouse leave
  };

const FlipCardContainer = styled('div')({
  perspective: '1000px',
  // marginTop:5,
  // marginBottom:5
});

const FlipCardInner = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.9s',
  transformStyle: 'preserve-3d',
  cursor:"pointer",
  '&:hover': {
    transform: isFlipped ? 'rotateY(90deg)' : 'rotateY(0deg)', 
  },
  borderRadius:0
});


const ResponsiveFlipCardInner = styled(FlipCardInner)(({ theme }) => ({
  width: "100%", // Use 100% width to fit container
  // height: "100%",
  [theme.breakpoints.up('xs')]: {
    width: window.innerWidth, // Width for extra-small screens
    height: '390px', // Height for extra-small screens
  },
  [theme.breakpoints.up('sm')]: {
    width: '360px', // Width for small screens
    height: '360px', // Height for small screens
  },
  [theme.breakpoints.up('md')]: {
    width: '500px', // Width for medium and up
    height: '500px', // Height for medium and up
  },
  [theme.breakpoints.up('lg')]: {
    width: '315px', // Width for medium and up
    height: '315px', // Height for medium and up
  },
}));

const FlipCardFront = styled(Card)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius:0
});

const FlipCardBack = styled(Card)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
});

  return (
    <FlipCardContainer  
    sx={{
      width: {
        xs: '100%'
      },
      margin: {
        xs: 'auto', 
      },
      marginTop:{
        xs: 1, 
      },
      marginBottom:{
        xs: 0.5, 
      },
      height: {
        xs: '100%',
      },}}
      
      >
        <ResponsiveFlipCardInner  
         onMouseEnter={handleMouseEnter} // Set hover effect
        onMouseLeave={handleMouseLeave}
        isFlipped={isFlipped} >

      <FlipCardInner 
      >
        <FlipCardFront   isFlipped={isFlipped}>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            sx={{objectFit:"cover"}}
            alt="Card image"

            />
        </FlipCardFront>
        <FlipCardBack>
          <CardContent >
            <Typography sx={{fontSize:"0.75rem"}}>{text}</Typography>
          </CardContent>
        </FlipCardBack>
      </FlipCardInner>
            </ResponsiveFlipCardInner>
    </FlipCardContainer>
  );
};

const FlipCardmulti = ({ image, text }) => {
  const [isFlipped, setIsFlipped] = useState(false); // State to manage flip

  const handleMouseEnter = () => {
    setIsFlipped(true); // Flip the card on mouse enter
  };

  const handleMouseLeave = () => {
    setIsFlipped(false); // Flip back on mouse leave
  };

const FlipCardContainer = styled('div')({
  perspective: '1000px',
  // marginTop:5,
  // marginBottom:5
});

const FlipCardInner = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.9s',
  transformStyle: 'preserve-3d',
  cursor:"pointer",
  '&:hover': {
    transform: isFlipped ? 'rotateY(90deg)' : 'rotateY(0deg)', 
  },
  borderRadius:0
});


const ResponsiveFlipCardInner = styled(FlipCardInner)(({ theme }) => ({
  width: "100%", // Use 100% width to fit container
  // height: "100%",
  [theme.breakpoints.up('xs')]: {
    width: window.innerWidth, // Width for extra-small screens
    height: '380px', // Height for extra-small screens
  },
  [theme.breakpoints.up('sm')]: {
    width: '360px', // Width for small screens
    height: '360px', // Height for small screens
  },
  [theme.breakpoints.up('md')]: {
    width: '500px', // Width for medium and up
    height: '500px', // Height for medium and up
  },
  [theme.breakpoints.up('lg')]: {
    width: window.innerWidth/5.067, // Width for medium and up
    height: '255px', // Height for medium and up
  },
}));

const FlipCardFront = styled(Card)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius:0
});

const FlipCardBack = styled(Card)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
});

  return (
    <FlipCardContainer  sx={{
      marginTop: 0,
      marginBottom: 0,
      width: {
        xs: '100%'
      },
      margin: {
        xs: 'auto', 
      },
      marginTop:{
        xs: 1, 
      },
      marginBottom:{
        xs: 0.5, 
      },
      height: {
        xs: '100%',
      },}}>
        <ResponsiveFlipCardInner    onMouseEnter={handleMouseEnter} // Set hover effect
        onMouseLeave={handleMouseLeave}
        isFlipped={isFlipped} >

      <FlipCardInner 
      >
        <FlipCardFront   isFlipped={isFlipped}>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            sx={{objectFit:"cover"}}
            alt="Card image"
            />
        </FlipCardFront>
        <FlipCardBack>
          <CardContent >
            <Typography sx={{fontSize:"0.75rem"}}>{text}</Typography>
          </CardContent>
        </FlipCardBack>
      </FlipCardInner>
            </ResponsiveFlipCardInner>
    </FlipCardContainer>
  );
};

