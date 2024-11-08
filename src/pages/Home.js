// src/pages/Home.js
import React from "react";
import { Box, Button, CardMedia, Divider, Grid, Grid2, Typography } from "@mui/material";
import myImage from "../assets/images/landinimage.png";
import { MyColor } from "../assets/color";
import Applogo from "../assets/images/s-group-logo.png";
import Applogoblack from "../assets/images/SGroup-Logo_black.webp";
import CarouselWithMultiItems from "../components/CarouselWithMultiItems ";
import MediaCarousel from "../components/MediaCarousel ";


const MemberVideoData =[
  {id:1,titile:"",videourl:require("../assets/video/memberssay1.mp4")},
  {id:2,titile:"",videourl:require("../assets/video/memberssay2.mp4")},
  {id:3,titile:"",videourl:require("../assets/video/memberssay3.mp4")},
  {id:4,titile:"",videourl:require("../assets/video/memberssay4.mov")},
]
const Home = () => {
  return (
    <Grid2>
      <Grid2>
        <BackgroundImageWithText />
      </Grid2>
      <Grid2
        sx={{
          background: MyColor.borderColor,
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: MyColor.backgroundColor,
            borderColor: MyColor.backgroundColor,
            p: 1,
          }}
          onClick={()=>window.open("https://app.glueup.com/org/s-group/memberships/",{target:"_blank"})}
        >
          Members Only Login
        </Button>
      </Grid2>

      <Grid2
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          background: "#ECECEC",
        }}
      >
        <img
          src={Applogoblack}
          alt="s-group"
          style={{ width: "25%", height: "auto" }}
        />
      </Grid2>
      <Grid2>
        <LandingComponent1 />
      </Grid2>
      <Grid2>
        <LandingComponent2 />
      </Grid2>
      <Grid2>
        <LandingComponent3 />
      </Grid2>
      <Grid2>
        <MediaCarousel/>
      </Grid2>
      <Grid2 sx={{mb:0, mt:1}}>
        <CarouselWithMultiItems/>
      </Grid2>
    </Grid2>
  );
};

export default Home;

const BackgroundImageWithText = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${myImage})`,
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
          top: "60%",
          left: "50%",
          width: "80%",
          p: 1,
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          border: `1px solid ${MyColor.borderColor}`,
        }}
      >
        <Typography variant="h1" fontSize={"1.8rem"}>
          CONNECTING PEOPLE TO PEOPLE
        </Typography>
        <Typography variant="h1" fontSize={"1.8rem"}>
          AND
        </Typography>
        <Typography variant="h1" fontSize={"1.8rem"}>
          PEOPLE TO OPPORTUNITIES
        </Typography>
      </Box>
    </Box>
  );
};

const LandingComponent1 = () => {
  return (
    <Box sx={{p: {xs:3,md:10,sm:10,lg:10}, pt: "0px !important", background: "#ECECEC" }}>
      <Divider sx={{ borderColor: MyColor.borderColor }} />
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{fontSize:{xs:"1.4rem",sm:"1.8rem",md:"2rem",lg:"2.2rem"},m:{xs:"1rem",sm:"2rem",md:"3rem",lg:"5rem"}}}
          fontWeight={"400"}
          
          letterSpacing={"4px"}
          color={"#2b2b2b"}
        >
          THE SYNERGY GROUP
        </Typography>
        <Typography
          sx={{
            fontSize: "0.9rem",
            pt: 1,
            pb: 1,
            fontWeight: "400",
            textAlign: "left",
          }}
        >
          The S-Group is an exclusive, subscription-based business networking
          community with a global membership exceeding 3,000 members globally
          across 40 unique group channels. Our premium platform serves as a
          nexus connecting top leaders and distinguished figures from various
          industries and disciplines, including a dynamic mix of entrepreneurs,
          investors, policymakers, creatives, and sports professionals.
        </Typography>
        <Typography
          sx={{
            fontSize: "0.9rem",
            pt: 1,
            pb: 1,
            fontWeight: "400",
            textAlign: "left",
          }}
        >
          At the core of the S-Group ethos is a commitment to mutual success.
          Members actively engage in supporting each other, unlocking invaluable
          networks, and cultivating opportunities. The growth of the S-Group is
          fueled by a synergy of organic connections and our adeptness at
          strategically cultivating relationships tailored to the specific needs
          of our members.
        </Typography>
        <Typography
          sx={{
            fontSize: "0.9rem",
            pt: 1,
            pb: 1,
            fontWeight: "400",
            textAlign: "left",
          }}
        >
          Distinguished by a shared commitment to mutual success, S-Group
          members actively contribute to each other’s success, unlocking
          unparalleled networks, and fostering opportunities. The wealth of our
          group channels within the S-Group lies in their abibilty to serve as
          exceptional resources, providing direct access to influential
          contacts, providing seasoned advice and profound insights, presenting
          business opportunities, and trustworthy referrals. Beyond this, our
          community serves an exceptional resource hub, accelerating the
          endeavours of our members and contributing towards the expansion of
          each individual’s network. In the grand tapestry of the business
          world, we recognise that, in the broader scope, relationships are
          paramount.
        </Typography>
        <Typography
          sx={{
            fontSize: "0.9rem",
            pt: 1,
            pb: 5,
            fontWeight: "400",
            textAlign: "left",
          }}
        >
          Within our community, meaningful and enduring relationships take root,
          serving as catalysts for the accelerated success of our members. We go
          beyond mere connections; we strategically foster relationships that
          stand the test of time. In the world of the S-Group, business and life
          intertwine seamlessly. We firmly uphold the belief that relationships
          constitute the most valuable resource, and our exclusive S-Group
          networking events, held throughout the year, are meticulously designed
          to cultivate, connect, and expand the networks of our esteemed
          community, underlining our commitment to not only doing business
          together but navigating the journey of life collectively.
        </Typography>
      </Grid2>
      <Divider sx={{ borderColor: MyColor.borderColor }} />
      <Typography
        sx={{ fontSize: "1rem", pt: 3, fontWeight: "400", textAlign: "center" }}
      >
        The world runs on relationships.
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          pt: 2,
          pb: 3,
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        Meaningful, lasting relationships are established right here.
      </Typography>

      <Typography
        sx={{
          fontSize: "1.1rem",
          pt: 1,
          pb: 1,
          fontWeight: "400",
          color: MyColor.borderColor,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        At the S-Group, we do business and life together.
      </Typography>
      <Grid2
        sx={{
          pt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          size="large"
          variant="outlined"
          sx={{
            color: MyColor.backgroundColor,
            borderColor: MyColor.backgroundColor,
            p: 1,
            pl: 3,
            pr: 3,
            fontSize: "1.2rem",
          }}
          
          onClick={()=>window.open("https://app.glueup.com/org/s-group/memberships/",{target:"_blank"})}
        
        >
          APPLY FOR MEMBERSHIP
        </Button>
      </Grid2>
    </Box>
  );
};

const LandingComponent2 = () => {
  return (
    <Box sx={{ p: {xs:3,md:10,sm:10,lg:10}, pt: 0, pb: 5, background: MyColor.borderColor }}>
      <Divider sx={{ borderColor: MyColor.borderColor }} />
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{fontSize:{xs:"1.1rem",sm:"1.8rem",md:"2rem",lg:"2.2rem"},m:{xs:"1rem",sm:"2rem",md:"3rem",lg:"5rem"}}}
          fontWeight={"400"}
          
          letterSpacing={"4px"}
          color={"#2b2b2b"}
          textTransform={"uppercase"}
        >
          What our members say
        </Typography>
      </Grid2>
      <Divider sx={{ borderColor: MyColor.backgroundColor }} />
      <Grid
        lg={12}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ p: {xs:1, sm:4, md:4, lg:4}, width: "50%" }} lg={6} xs={6}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The S-Group community is a platform that brings together
            individuals from all walks of life, regardless of age, gender, race,
            or religion, spanning different geographical locations. Its core
            objective is to foster connections among people, driven by a
            selfless commitment to helping one another and paying it forward
            whenever possible. Within this community, there is an unwavering
            dedication to supporting fellow S-Group members in their personal
            and professional growth.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “For me, being a part of the S-Group has opened up new business
            opportunities in South Africa. It has also been a fulfilling
            experience to contribute to charitable causes that are identified
            and supported by the network.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            Among the various network groups I am involved in, the S-Group
            stands out as one of the most impactful. As a member of both YPO and
            EO, I can confidently say that the S-Group has added entirely new
            dimensions to my business ventures. I firmly believe in the
            importance of surrounding oneself with good company on the journey
            of life.”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “I frequently get asked about my go-to resource for stock ideas and
            information. Without a doubt, S-Vest 2.0 has been a game-changer. It
            has not only been incredibly accurate in predicting market
            movements, but it has also helped me make substantial gains during
            favorable times and saved me from losses during challenging periods.
            This group has demonstrated their expertise by successfully calling
            pivotal market moments such as the pandemic bottom, the bottom in
            uranium, the halt in growth stocks’ ascent, the rise in coal stocks,
            the rally in the energy sector, the drop in Amazon stocks, and the
            subsequent rally in Twitter stocks, among many other remarkable
            calls.”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “Since joining the S-Group, I have embarked on extraordinary
            journeys, both in my personal and professional life. So far, the
            experience has been nothing short of incredible.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The support and encouragement I have received from the S-Group
            network have truly humbled me. The genuine care and assistance
            extended by the members exemplify the spirit of this community.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “I am incredibly grateful to the S-Vest 2.0 platform and its Head
            Contributor, Dorian Prosdocimi, along with all the regular
            contributors. Through their insights and knowledge, I have learned
            more about finance and investment than I did during my postgraduate
            and MBA studies combined.”
          </Typography>
        </Grid>
        <Grid sx={{ p: {xs:1, sm:4, md:4, lg:4}, width: "50%" }} lg={6} xs={6}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The S-Group has been an amazing experience for me. It goes beyond
            financial gains; it has provided me with invaluable knowledge that I
            wouldn’t have been able to acquire elsewhere.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “Fundamentally, human motivation is driven by the desire to achieve
            and feel a sense of significance, or the need to belong and have a
            sense of affiliation within a trusted network. The beauty of the
            S-Group is that it offers both of these motivational drivers, which
            is quite unique compared to other networks where you have to choose
            one or the other.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The S-Group has introduced me to a diverse group of individuals who
            are unapologetically themselves and have the courage to dream big. I
            have had the privilege of attending extraordinary S-Group Business
            Networking events, but more importantly, I have experienced kindness
            and generosity in ways that I never thought possible.{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “Since becoming an S-Group member, my life and business have
            flourished exponentially. The support, guidance, and opportunities
            within the network have propelled me to new heights of success.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “In the relatively short period that I have been a part of the
            S-Group, I have witnessed positive interactions, gained valuable
            knowledge, and received assistance from individuals who don’t even
            know me but are willing to help when I seek advice.”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The members of the S-Group have been incredibly helpful. There are
            too many individuals to mention, but what stands out is that their
            assistance comes without any ulterior motives or sales pitches. It
            is genuine help, with no strings attached.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The S-Group has proven to be a source of immense value, both on a
            personal and professional level. The connections, resources, and
            support provided by the S-Group community are truly invaluable.”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “Through platforms like S-Vest 2.0, I have witnessed a profound
            impact on my knowledge, success, personal growth, and sense of
            belonging. Not only have I experienced financial gains, but I have
            also been able to expand my horizons and develop myself as an
            individual. The support and guidance received within this trusted
            network have played a significant role in my progress and
            achievements. I am grateful for the opportunities and growth that
            the S-Group has provided me.”
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          sx={{
            display: "flex",
          }}
        >

<Grid container spacing={1} p={2}>
        {MemberVideoData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardMedia
                  component={"video"}
                  alt="s-group"
                  controls
                  autoPlay
                  muted
                  src={item.videourl}
                  sx={{ width: "100%", height: "10rem", objectFit: "cover" }}
                  />
          </Grid>
        ))}
      </Grid>



        
        </Grid>
      </Grid>
    </Box>
  );
};

const LandingComponent3 = () => {
  return (
    <Box sx={{ p: {xs:3,md:10,sm:10,lg:10}, pt: 0, pb: 1, background: "#fff" }}>
      <Divider sx={{ borderColor: MyColor.borderColor }} />
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{fontSize:{xs:"1.1rem",sm:"1.8rem",md:"2rem",lg:"2.2rem"},m:{xs:"1rem",sm:"2rem",md:"3rem",lg:"5rem"}}}
          fontWeight={"400"}
          letterSpacing={"4px"}
          color={"#2b2b2b"}
          textTransform={"uppercase"}
        >
          THE S-GROUP EVENTS
        </Typography>
      </Grid2>
      <Divider sx={{ borderColor: MyColor.backgroundColor }} />
      <Grid
        lg={12}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ p: {xs:1, sm:4, md:4, lg:4}, width: "50%" }} lg={6} xs={6}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “I want to express my heartfelt appreciation to the organisers and
            sponsors for putting together an incredible event! What made the
            experience truly unforgettable was the remarkable camaraderie and
            banter among all the participants. People were accommodating, open
            to exchanging ideas, and we shared some truly epic laughs together.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The journey from the bustling city of Harare was well worth it.
            Thank you to the dedicated S-Group team involved in making this
            event a success.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “To say that the S-Group events are exceptional would be an
            understatement. From the moment we arrived until the lights were
            switched off, we were treated like royalty.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The networking opportunities were unparalleled. Existing
            relationships were solidified, and new connections were forged.
            Kudos to the S-Group team for organising such a memorable
            experience.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “For those who were unable to attend, you truly missed out. We hope
            to see you at the next event!”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “A sincere thank you to the S-Group team! It was a phenomenal
            weekend and an incredible year-end function. The event was
            meticulously planned and organised, and everything from the
            atmosphere to the venue and food was top-notch. We are proud to be
            part of the S-Group and have sponsored for the past two years. Thank
            you for the opportunity. Keep up the fantastic work – the Instacom
            family.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “Thank you to the S-Group team! I had an absolute blast this
            weekend. I’ve been a member for a little over a year, and thanks to
            Tonderai’s encouragement, I decided to travel from the UK to meet
            some amazing people. I wasn’t disappointed at all. I made invaluable
            connections and finally got to meet some of the legends of the
            S-Group. I feel incredibly privileged to be part of this wonderful
            community. I’m already looking forward to the next events and the
            chance to meet even more incredible individuals.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “We flew in from Malta for these events, and it was definitely worth
            it! The organization was flawless, the atmosphere was fantastic, and
            I enjoyed every minute of catching up with friends and getting to
            know some amazing new members. Congratulations to the S-Group team –
            it was a superb event! Absolutely loved it.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “The S-Group team organised an incredible event over the past two
            days. It was truly world-class! I can’t wait to attend more of these
            in the future.”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “What an amazing group of people! It’s a privilege to be among all
            the S-Group members. It was an absolute pleasure, and I had a
            fantastic time. I really enjoyed meeting everyone. Thanks again!”
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            The S-Group Gathering was an absolutely amazing networking event. It
            was truly something special – a perfect blend of amazing people and
            great energy. As a follow-up, I’ve spent the morning sending out
            emails and setting up meetings, and the response has been
            exceptional.”
          </Typography>
        </Grid>
        <Grid sx={{  p: {xs:1,sm:4, md:4, lg:4}, width: "50%" }} lg={6} xs={6}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “I had a blast at the event, and I definitely won’t miss the next
            one!”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            I recently attended a business networking event hosted by the
            S-Group, and it was a game-changer. The highlight for me was the
            opportunity to connect with influential business leaders. The event
            provided a platform where I not only exchanged ideas but also gained
            valuable insights from seasoned professionals. It was an invaluable
            experience that has already had a positive impact on my business
            trajectory.”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            The S-Group’s networking events have consistently exceeded my
            expectations, particularly in their ability to facilitate
            connections with investors. The diverse group of investors in
            attendance created an ideal environment to pitch ideas and explore
            potential collaborations. This unique networking opportunity has
            opened doors for my business, and I am excited about the future
            prospects.{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            Attending the S-Group’s networking event was a transformative
            experience for me. I found myself surrounded by a community of
            like-minded individuals who share a passion for success. The
            networking sessions went beyond mere business transactions, focusing
            on building genuine relationships with people who truly understand
            the entrepreneurial journey. It is quite rare to find such a
            supportive network, and I am grateful for the connections I have
            made, which will undoubtedly lead to lasting collaborations and
            friendships.”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            “As a dedicated and long-standing member of the S-Group, I want to
            express my ongoing appreciation for the consistently exceptional
            networking events that have been organised. Having never missed a
            single gathering over the years, I can confidently say that the
            S-Group’s commitment to creating a unique and valuable community is
            unparalleled. These events have played an instrumental role in my
            professional growth, continuously providing opportunities to
            connect, learn, and engage with industry leaders. It goes beyond
            just attending events; it is a journey of collaboration, shared
            successes, and enduring friendships. Here’s to the continued success
            of the S-Group!”{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              pt: 1,
              pb: 1,
              fontWeight: "400",
              textAlign: "left",
            }}
          >
            I recently had the privilege of attending a business networking
            event hosted by the S-Group, and it was truly a game-changer. One of
            the standout moments was the opportunity to connect with influential
            business leaders. The event provided a platform where I could not
            only exchange ideas but also gain invaluable insights from seasoned
            professionals. This experience has already had a positive impact on
            the trajectory of my business, and I am excited about the
            possibilities that have emerged from these meaningful interactions.”{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Grid
          sx={{
            display: "flex",
          }}
        ></Grid>
      </Grid>
      <Grid></Grid>
    </Box>
  );
};
