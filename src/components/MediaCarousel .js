import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';

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
    <Box sx={{ width: '40%', margin: 'auto' }}>
      <Carousel
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
      >
        {/* Image */}
        <div>
          <img src="https://via.placeholder.com/400x300?text=Image" alt="Image" style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* GIF */}
        <div>
          <img src="https://media.giphy.com/media/3o85xIO33l7RlmLR4I/giphy.gif" alt="Gif" style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* Video */}
        <div>
          <video
            controls
            style={{ width: '100%', height: 'auto' }}
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Another Image */}
        <div>
          <img src="https://via.placeholder.com/400x300?text=Image+2" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* Another GIF */}
        <div>
          <img src="https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif" alt="Gif 2" style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* Another Video */}
        <div>
          <video
            controls
            style={{ width: '100%', height: 'auto' }}
          >
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </Carousel>
    </Box>
  );
};

export default MediaCarousel;
