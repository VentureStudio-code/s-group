// src/pages/About.js
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardMedia,
  colors,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import Slogo from "../assets/images/SGroup-Logo_black.webp";
import Slogosection3 from "../assets/images/Elements-1280x529.png";
import { MyColor } from "../assets/color";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

const InfoData = [
  {
    id: 1,
    name: "ROBERT HERSOV",
    imageurl: "/members/image1.jpg",
    infotext1:
      "Rob Hersov is a South African entrepreneur and private investor who has founded and owns a number of companies. He is the chairman and founder of the S-Group (Synergy Group), Invest Africa, African Capital Investments and AltCaplnvest. He also serves on a number of advisory boards (Chairman of VistaJet and Sard Verbinnen).",
    infotext2:
      "Robert founded Marquis Jet Europe (sold to NetJets), Sportal, and Adoreum (sold to an MBO). He served on the Board of Richemont, was CEO of Telepiu (Italy) and worked alongside Rupert Murdoch at News Corp (New York).",
    infotext3:
      "He has worked as an investment banker with Goldman Sachs (NY) and Morgan Stanley (London). Robert graduated from the University of Cape Town (B.Bus.ScHons) and attained his MBA at Harvard Business school.",
  },
  {
    id: 2,
    name: "TONDERAI CHAVHANGA",
    imageurl: "/members/image2.jpg",
    infotext1:
      "Tonderai Chavhanga is the co-founder of the S-Group (Synergy Group), founder of Africa Connect International, Mkoma Africa and director at African Digital Media Solutions. He is a relationship-centric dynamic business development enabler with a proven track record of leveraging a multi-faceted global network of leaders to create value-adding business partnerships built on shared value and trust. Tonderai has been bridging relational and opportunity gaps for public and private entities across Africa in various sectors, including Financial Services, Mining, Agriculture, Energy, Fintech and non-profit. He is passionate and fully dedicated to leveraging his relationships skills and knowledge to be a catalyst for business growth in Africa by connecting people to opportunities.",
    infotext2:
      "Prior to his impactful business career, Tonderai spent 13 years as a professional rugby player, proudly representing South Africa’s national rugby team, the Springboks, along with notable teams such as the Stormers, Lions, Sharks, and Newport Gwent Dragons.",
    infotext3: "",
  },
  {
    id: 3,
    name: "Dylan MackenziE",
    imageurl: "/members/image3.png",
    infotext1:
      "Dylan Mackenzie is the co-founder of the S-Group (Synergy Group), conceptualized and co-founded The Lion Cage and was previously a director at Deliquory Services. Dylan has an extensive understanding of luxury travel and goods with deep and broad contacts amongst the high-net and ultra-high-net worth arena, worldwide.",
    infotext2:
      "Experienced in curating judicious partnerships and nurturing key relationships. Dylan is solution-driven, and people and results-orientated. A decision maker and momentum accelerator.",
    infotext3:
      "Successful seed-capital raises and the conclusion of sale for large entities – Dylan’s consultation has strong communication and leadership conducive for execution. He builds rapport effectively and establishes trust, vital to leading global connectivity. Dylan has a passion for wildlife and travel experiences, with a non-executive position as Luxury Safari Ambassador at The Safari Guys and Embassy Direct.",
  },
  {
    id: 4,
    name: "Megon Chavhanga",
    imageurl: "/members/image4.jpg",
    infotext1:
      "Megon Chavhanga is the co-founder of the S-Group (Synergy Group), Africa Connect International, Mkoma Africa, and former COO of Africa Padel. She holds a BA in Social Sciences from RAU (Rand Afrikaans University). Megon’s career history includes a significant role as Acting Chief of Staff within the South African Presidency. Additionally, she ran a non-profit organisation dedicated to supporting cancer and HIV/AIDS patients and promoting healthy lifestyle programs in underserved communities.",
    infotext2:
      "As the co-founder of Mkoma Africa, Megon had the opportunity to explore her creative side by developing an animated TV series “Super Impi,” aimed at empowering youth from underprivileged communities through sport, specifically rugby. She also took on a role as creative director for a segment on CNN African Voices, highlighting her dedication to creating meaningful and impactful content.",
    infotext3:
      "Megon’s diverse background and extensive experience in various leadership roles demonstrate her dedication to making a difference in both business and social spheres.",
  },
  {
    id: 5,
    name: "Dorian PROSDOCIMI",
    imageurl: "/members/image5.jpeg",
    infotext1:
      "Dorian Prosdocimi brings a wealth of expertise to the financial realm, excelling in trading, investing, and financial market advisory. As the founder of Prosdocimi Ltd in 2008, Dorian has been a driving force in the industry, successfully navigating all market conditions by far outperforming the indexes and performances of the majority of asset managers.",
    infotext2:
      "Before establishing Prosdocimi Ltd, he served as the CEO of Friedman Billings Ramsey, playing a pivotal role in building the European business from 2000 to 2007. Dorian’s journey also includes roles as an institutional broker with Salomon Smith Barney in New York and London offices from 1993 to 2000, and as a commodity broker at Czarnikow Ltd in London.",
    infotext3:
      "Notably, Dorian Prosdocimi’s influence extends to the S-Group, where he spearheads the Investment group channel. His extensive experience in equity capital markets and international capital raising has been instrumental in shaping the investment landscape for a diverse range of clients. It’s worth highlighting that numerous S-Group members have reaped handsome benefits from Dorian’s insightful investment picks.",
  },
  {
    id: 6,
    name: "RON MACKENZIE",
    imageurl: "/members/image6.jpg",
    infotext1:
      "Ron Mackenzie, the Chief Wandering Officer at The Safari Guys, is more than a title; he personifies boundless exploration. With an intense case of Wanderlust, Ron rarely stays put, always in pursuit of new horizons, particularly in Southern Africa.",
    infotext2:
      "Beyond crafting unique itineraries for clients worldwide, Ron holds a distinctive position in the travel industry. He played a crucial role in rallying industry leaders during the challenges posed by the pandemic, showcasing his commitment to the industry’s resilience.",
    infotext3:
      "In addition to his role at The Safari Guys, Ron is the founder of Embassy Direct. The Ambassador’s Handbook, an annual high-quality publication, serves as a directory to the African Expat community.",
  },
];

const MissionStatementData = {
  heading: "THE SYNERGY GROUP MISSION STATEMENT",
  priContent: [
    {
      id: 1,
      title: "MISSION",
      text: "At the heart of the S-Group is our unwavering commitment to facilitate meaningful connections among exceptional business leaders globally. We recognize the power of networking in cultivating opportunities for mutual growth and collaboration. Our mission is to be the catalyst that brings together visionary minds, fostering an environment where ideas flourish, partnerships thrive, and success is not just an individual achievement but a collective triumph.",
    },
    {
      id: 2,
      title: "PURPOSE",
      text: "We believe in the philosophy of paying it forward. The S-Group is dedicated to utilizing its influential platform and abundant resources to spread positivity and make a lasting impact on the wider community. By harnessing the collective strength of our members, we strive to create a ripple effect of positive change, contributing to the greater good and leaving a legacy of shared success.",
    },
    {
      id: 3,
      title: "AMBITION",
      text: "Our ambition is to nurture a dynamic and supportive environment where every member of the S-Group plays a pivotal role in each other’s success stories. We aim to go beyond conventional networking, creating a platform that transcends geographical boundaries and industry silos. Our vision is to establish the S-Group as more than just a business networking platform – it’s a vibrant ecosystem that generates invaluable networks, unlocks new horizons, and opens up a world of possibilities for our members.",
    },
  ],
  secContent: {
    heading: "VALUES",
    content: [
      {
        id: 1,
        title: "Collaboration",
        text: "We believe in the strength of collaborative efforts, where the synergy of diverse talents and perspectives leads to innovative solutions and shared success.",
      },
      {
        id: 1,
        title: "Integrity",
        text: "Upholding the highest standards of honesty, transparency, and ethical conduct is fundamental to our identity. We build trust through integrity in every interaction.",
      },
      {
        id: 2,
        title: "Empowerment",
        text: "We empower our members by providing them with the tools, knowledge, and connections necessary for personal and professional growth. An empowered member is a catalyst for positive change.",
      },
      {
        id: 3,
        title: "Inclusivity",
        text: "The S-Group thrives on diversity and inclusivity. We celebrate differences and recognize the unique contributions of each member, fostering an environment where everyone feels valued and heard.",
      },
      {
        id: 4,
        title: "Continuous Learning",
        text: "In the ever-evolving business landscape, we embrace a culture of continuous learning. We encourage curiosity, adaptability, and a commitment to staying at the forefront of industry trends.",
      },
      {
        id: 5,
        title: "Community Impact",
        text: "Beyond individual success, we measure our achievements by the positive impact we make on the communities we serve. We believe in leveraging our collective influence to contribute meaningfully to society.",
      },
    ],
  },
};

const section3Data = {
  leftContent: [
    {
      title: "THE S-GROUP TIER 1 ELITE GROUP CHANNELS",
      text: [
        { id: 1, text: "S-Vest 2.0 Global" },
        { id: 2, text: "S-Vest SA" },
        { id: 3, text: "S-Biz SA" },
        { id: 4, text: "S-Biz Global" },
      ],
    },
    {
      title: "S-CONNECT TIER 2 PREMIUM GROUP CHANNELS",
      text: [
        { id: 1, text: "S-Connect Africa" },
        { id: 2, text: "S-Connect Crypto" },
        { id: 3, text: "S-Connect Women" },
        { id: 4, text: "S-Connect Rugby" },
        { id: 5, text: "S-Connect Travel" },
      ],
    },
  ],
  rightContent: [
    { id: "1", text: "S-CONNECT TIER 2 GROUP CHANNELS" },
    { id: "2", text: "THE S-GROUP MEMBER ENGAGEMENT HUB" },
    { id: "3", text: "THE S-GROUP MEMBER DIRECTORY" },
    { id: "4", text: "THE S-GROUP BUSINESS NETWORKING EVENTS" },
    { id: "5", text: "THE S-GROUP SOCIAL BUSINESS NETWORKING EVENTS" },
    { id: "6", text: "THE S-GROUP MERCHANDISE" },
  ],
};

const About = () => {
  return (
    <Grid2>
      <MembersInfoList />
      <MissionStatement />
      <Section3 />
      <Section4 />
    </Grid2>
  );
};

export default About;

const MembersInfoList = () => {
  return (
    <Grid2>
      {InfoData.map((item, index) => {
        return <Member member={item} index={index} />;
      })}
    </Grid2>
  );
};

const Member = ({ member, index }) => {
  return (
    <Grid2
      lg={12}
      xs={12}
      sm={12}
      md={12}
      sx={{ display: { md: "flex", lg: "flex" } }}
    >
      <Grid2
        lg={6}
        xs={6}
        sm={6}
        md={6}
        sx={{ width: { xs: "100%", sm: "100%%", md: "40%", lg: "40%" } }}
      >
        <CardMedia
          component="img"
          height="140"
          image={member.imageurl}
          alt="green iguana"
          sx={{
            width: "100%",
            height: { xs: "100%", sm: "100%", md: "25rem", lg: "26rem" },
            objectFit: {xs:"contain",sm:"cover",md:"cover",lg:"cover"},
          }}
        />
      </Grid2>
      <Grid2
        lg={6}
        xs={6}
        sm={6}
        md={6}
        sx={{
          width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
          pr: { xs: 0, sm: 0, md: 3, lg: 3 },
          pt: { xs: 3, sm: 3, md: 4, lg: 4 },
          pl: { xs: 0, sm: 0, md: 9, lg: 9 },
          p: { xs: 5, sm: 5 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem", lg: "2rem" },
            color: MyColor.borderColor,
          }}
        >
          {member.name}
        </Typography>
        <Divider />
        <Typography
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "0.7rem",
              md: "0.7rem",
              lg: "0.8rem",
            },
            pt: 3,
          }}
        >
          {member.infotext1}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "0.7rem",
              md: "0.7rem",
              lg: "0.8rem",
            },
            pt: 1,
          }}
        >
          {member.infotext2}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "0.7rem",
              md: "0.7rem",
              lg: "0.8rem",
            },
            pt: 1,
          }}
        >
          {member.infotext3}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

const MissionStatement = () => {
  return (
    <Grid2 sx={{ background: "#ECECEC", p: 5 }} textAlign={"center"}>
      <Grid2>
        <CardMedia
          component="img"
          height="80"
          image={Slogo}
          alt="Slogo"
          sx={{
            objectFit: "contain",
          }}
        />
      </Grid2>
      <Grid2 textAlign={"center"}>
        <Typography
          sx={{ pt: 2, color: MyColor.borderColor, fontSize: "1.2rem" }}
        >
          {MissionStatementData.heading}
        </Typography>
      </Grid2>

      <Divider />
      <Grid2 pt={3}>
        {MissionStatementData.priContent.map((item) => {
          return (
            <Grid2 textAlign={"center"} paddingInline={2}>
              <Typography pt={2} sx={{ fontWeight: "700" }}>
                {item.title}
              </Typography>
              <Typography
                sx={{
                  pt: 1,
                  textAlign: "justify",
                  fontSize: {
                    xs: "0.7rem",
                    sm: "0.75rem",
                    md: "0.75rem",
                    lg: "0.8rem",
                  },
                }}
              >
                {item.text}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>

      <Grid2 textAlign={"center"} paddingInline={2} pt={3}>
        <Typography sx={{ fontWeight: "700" }}>
          {MissionStatementData.secContent.heading}
        </Typography>
        {MissionStatementData.secContent.content.map((item) => {
          return (
            <Grid2>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "", sm: "", md: "", lg: "0.9rem" },
                }}
                pt={2}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  pt: 1,
                  textAlign: "justify",
                  fontSize: {
                    xs: "0.7rem",
                    sm: "0.75rem",
                    md: "0.75rem",
                    lg: "0.8rem",
                  },
                }}
              >
                {item.text}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </Grid2>
  );
};

const Section3 = () => {
  const [clicked, setClicked] = useState({
    accordian1: false,
    accordian2: false,
  });
  console.log("clicked", clicked);
  return (
    <Grid2
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{ display: { md: "flex", lg: "flex" } }}
      p={5}
    >
      <Grid2
        xs={6}
        sm={6}
        md={6}
        lg={6}
        p={4}
        sx={{ pr: { md: 0, lg: 0 }, width: { md: "50%", lg: "50%" } }}
      >
        <Grid2>
          <CardMedia
            component="img"
            height="80"
            image={Slogosection3}
            alt="Slogo"
            sx={{
              objectFit: "contain",
            }}
          />

          <Accordion
            TransitionProps={{ timeout: 1200 }}
            sx={{
              mt: 2,
              p: 0.5,
              border: `1px solid ${MyColor.borderColor}`,
              borderRadius: 0,
              borderTopLeftRadius: "0px !important",
              borderTopRightRadius: "0px !important",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              onClick={() =>
                setClicked({ ...clicked, accordian1: !clicked.accordian1 })
              }
              expandIcon={
                clicked.accordian1 ? (
                  <RemoveCircleRoundedIcon
                    sx={{ fontSize: "1.2rem", color: MyColor.borderColor }}
                  />
                ) : (
                  <AddCircleRoundedIcon
                    sx={{ fontSize: "1.2rem", color: MyColor.borderColor }}
                  />
                )
              }
              sx={{
                fontWeight: "600",
                "&:hover": {
                  color: MyColor.borderColor,
                },
              }}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {section3Data.leftContent[0].title}
            </AccordionSummary>
            {section3Data.leftContent[0].text.map((item) => {
              return (
                <AccordionDetails key={item.id} sx={{ p: 0 }}>
                  <ul>
                    <li style={{ fontWeight: "400" }}>{item.text}</li>
                  </ul>
                </AccordionDetails>
              );
            })}
          </Accordion>
          <Accordion
            TransitionProps={{ timeout: 1200 }}
            sx={{
              mt: 2,
              p: 0.5,
              border: `1px solid ${MyColor.borderColor}`,
              borderRadius: 0,
              borderBottomLeftRadius: "0px !important",
              borderBottomRightRadius: "0px !important",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              onClick={() =>
                setClicked({ ...clicked, accordian2: !clicked.accordian2 })
              }
              expandIcon={
                clicked.accordian2 ? (
                  <RemoveCircleRoundedIcon
                    sx={{ fontSize: "1.2rem", color: MyColor.borderColor }}
                  />
                ) : (
                  <AddCircleRoundedIcon
                    sx={{ fontSize: "1.2rem", color: MyColor.borderColor }}
                  />
                )
              }
              sx={{
                fontWeight: "600",

                "&:hover": {
                  color: MyColor.borderColor,
                },
              }}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              {section3Data.leftContent[1].title}
            </AccordionSummary>
            {section3Data.leftContent[1].text.map((item) => {
              return (
                <AccordionDetails key={item.id} sx={{ p: 0 }}>
                  <ul>
                    <li>{item.text}</li>
                  </ul>
                </AccordionDetails>
              );
            })}
          </Accordion>
        </Grid2>
      </Grid2>

      <Grid2
        xs={6}
        sm={6}
        md={6}
        lg={6}
        p={4}
        sx={{
          width: { md: "50%", lg: "50%" },
        }}
      >
        {section3Data.rightContent.map((item) => {
          return (
            <Grid2 sx={{ borderLeft: `1px solid ${MyColor.borderColor}` }}>
              <Typography
                sx={{ pt: 2, pb: 2, pl: { sm: 4, xs: 4 }, fontWeight: "400" }}
              >
                {item.text}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </Grid2>
  );
};

const Section4 = () => {
  return (
    <Grid2>
      <Leftcardmedia
        height={35}
        topheading={"“The Strength of the Wolf is in the Pack.”"}
        p1={
          "The S-Group strongly believes in the power of unity and collaboration. We believe that “The Strength of the Wolf is in the Pack.” Together, we navigate the complexities of business and life, supporting and uplifting one another along the way. The S-Group has facilitated life-changing experiences and even played a role in life-saving moments for many of our members."
        }
        p2={
          "Our community is built on the principle of accelerating the endeavors of each member. We strive to expand the network and net worth of every individual within our group. At the S-Group, we understand the importance of connections and the immense value they hold."
        }
        subheading={"Our Channels"}
        p3={
          "Our channels, namely S-Vest 2.0 and S-Vest SA, are platforms that provide daily trades and investment insights. These channels are curated by select professional contributors who offer their expertise, including insights on entry and exit points, and overall market analysis primarily focused on South African (SA) and US equities."
        }
        p5={
          "By being part of the S-Group and utilizing these channels, members gain access to a community of like-minded individuals, valuable market information, and expert advice. Together, we strive for success and growth in our businesses and investments."
        }
        p4={
          "These two channels, S-Vest 2.0 and S-Vest SA, are particularly valuable as their monetary worth can be directly attributed to the channel and advice provided. Membership in S-Vest SA, our JSE-focused trading group, is complimentary when joining S-Vest 2.0."
        }
        imageurl={require("../assets/images/sec4image1.jpg")}
      />
      <Rightcardmedia
        p4={
          "By being a part of the S-Group, our members have access to a supportive and dynamic community that offers both professional and social connectivity, enabling them to forge meaningful relationships and collaborate on projects that drive growth and positive change."
        }
        p3={
          "Our platform is designed to facilitate both professional and social connections, fostering an environment where members can engage in projects that contribute to expanding foreign investment on the African continent. We are dedicated to building a better world together and actively encourage our members to pay their goodness forward, creating a positive impact for communities and individuals in need."
        }
        p2={
          "In addition to S-Biz, we have S-Connect group channels that are specifically focused on sectors, interests, or locations. These group channels provide a space for members to engage in discussions and debates that are strictly relevant to the group’s description. Examples of these groups include S-Connect Africa, S-Connect London, S-Connect Women, and S-Connect Biz Tech. These channels enable members to connect with others who share a common interest or focus, fostering valuable conversations and collaborations within specific industries or regions."
        }
        p1={
          "Within the S-Group, we have two important business groups: S-Biz South Africa and S-Biz Global. These groups serve as platforms for entrepreneurs and corporate leaders to connect, collaborate, and bring their ideas to life. By joining these groups, our members gain the opportunity to find suppliers, offer their services, and exchange valuable contacts and insights, all through a single message. We believe in the power of networking and making things happen through meaningful connections."
        }
        imageurl={require("../assets/images/sec4image2.jpeg")}
      />
      <Leftcardmedia
      
      height={40}
        p6={
          "We strongly encourage our members to take full advantage of these opportunities to connect with fellow members and industry professionals. Whether through virtual interactions on our online platforms or in-person networking events, the S-Group is committed to creating an environment that empowers members to grow both professionally and personally."
        }
        p5={
          "One of the highlights of our calendar is the annual yearend two-day S-Group Social Business Networking event. This event allows members and guests to network and engage with influential individuals from various industries. It offers a unique platform to establish and cultivate valuable business connections in an enjoyable, informal, and relaxed atmosphere."
        }
        p4={
          "Additionally, attending our S-Group Business Networking events throughout the year is highly encouraged. These events offer an ideal setting to meet and connect with other members in person, fostering relationships and opening doors for collaborations and business opportunities."
        }
        p3={
          "To connect and engage with other members of the S-Group community, there are various options available. You can utilize our online platforms to engage in discussions, share insights, and network with fellow members. These virtual spaces provide opportunities for meaningful connections and collaborations."
        }
        subheading={"Connect With Us"}
        p2={
          "In addition to the S-Group Member Engagement Hub, our website also includes an archive of informative and entertaining webinars. These webinars feature notable guests such as Jordan Belfort, Bob Diamond, the late Shane Warne, and Rwandan President Paul Kagame. These webinars cover a wide range of topics and provide valuable insights that can greatly benefit our members."
        }
        p1={
          "As a member of the S-Group, you have access to the S-Group Member Engagement Hub and the S-Group Member Directory. This directory allows you to connect with other members based on the Tier you are subscribed to. Whether you are looking for potential business partners, service providers, or simply want to expand your network, the S-Group Member Directory provides a platform to connect with like-minded individuals."
        }
        topheading={"Access to Member Directory "}
        imageurl={require("../assets/images/sec4image3.jpeg")}
      />
    </Grid2>
  );
};

const Leftcardmedia = ({
  imageurl,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  topheading,
  subheading,
  height
}) => {
  return (
    <Grid2 md={12} lg={12} sx={{display:{md:"flex",lg:"flex"},background:"#ECECEC",alignItems:"center"}}>
      <Grid2 md={6} lg={6} sx={{width:{md:"30%",lg:"30%"}}}>
        <CardMedia
          component="img"
          height="400"
          image={imageurl}
          alt="Slogo"
          sx={{
            objectFit: "cover",
            width:"100%",
            height:`${height}rem`
          }}
        />
      </Grid2>
      <Grid2 md={6} lg={6} sx={{width:{md:"70%",lg:"70%"},paddingInline:8,}} >
        <Typography sx={{pb:3,textAlign:"center", fontSize:"1.5rem",color:MyColor.borderColor}}>{topheading}</Typography>
        <Typography sx={{fontSize:"0.8rem"}}>{p1}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p2}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p3}</Typography>
        <Typography sx={{fontSize:"0.9rem",pt:2 , pb:2,fontWeight:"600"}}>{subheading}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p4}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p5}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p6}</Typography>
      </Grid2>
    </Grid2>
  );
};
const Rightcardmedia = ({
  imageurl,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  topheading,
  subheading,
}) => {
  return (
    <Grid2  md={12} lg={12} sx={{display:{md:"flex",lg:"flex"},alignItems:"center"}}>
      <Grid2  md={6} lg={6} sx={{width:{md:"70%",lg:"70%"},paddingInline:8}}>
        <Typography>{topheading}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p1}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p2}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p3}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{subheading}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p4}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p5}</Typography>
        <Typography sx={{fontSize:"0.8rem",pt:1,textAlign:"justify"}}>{p6}</Typography>
      </Grid2>
      <Grid2 md={6} lg={6} sx={{width:{md:"30%",lg:"30%"}}}>
        <CardMedia
          component="img"
          height="200"
          image={imageurl}
          alt="Slogo"
          sx={{
            objectFit: "cover",
            width:"100%",
            height:"30rem"
          }}
        />
      </Grid2>
    </Grid2>
  );
};
