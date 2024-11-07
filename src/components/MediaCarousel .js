import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, CardMedia, Grid } from '@mui/material';

const MediaCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1, // Show 3 items on large screens
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1, // Show 2 items on desktop
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1, // Show 1 item on tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 item on mobile
    },
  };

  return (
    <Box sx={{ width: {xs:"90%",sm:"80%",md:"60%",lg:"40%"}, margin: 'auto' }}>
      {/* <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000} // Set autoPlay to false if you don't want autoplay for videos
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
      > */}
       <Grid p={0}>
              <CardMedia
                src={require("../assets/video/S-Group-VIP-Black-Tie-Gala-Dinner.mov")}
                component={"video"}
                  alt="s-group"
                  // controls
                  autoPlay
                  muted
                  sx={{ width: "100%", height: "22rem", objectFit: "cover" }}
              />
            </Grid>
      {/* </Carousel> */}
    </Box>
  );
};

export default MediaCarousel;
