import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';

const CarouselWithMultiItems = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 8, // Show 5 items on large screens
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3, // Show 3 items on desktop
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2, // Show 2 items on tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 item on mobile
    },
  };

  return (
    <Box sx={{ width: '100%', margin: 'auto' }}>
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          <img style={{width:"100%",objectFit:"fill"}}  src="https://picsum.photos/200/300" alt="Item 1" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}}  src="https://picsum.photos/200/300" alt="Item 2" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}}  src="https://picsum.photos/200/300" alt="Item 3" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}}  src="https://picsum.photos/200/300" alt="Item 4" />
        </div>
        <div>
          <img  style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200/300" alt="Item 5" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 6" />
        </div>
        <div>
          <img  style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 1" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 2" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 3" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 4" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 5" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 6" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 1" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 2" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 3" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200" alt="Item 4" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200/300" alt="Item 5" />
        </div>
        <div>
          <img style={{width:"100%",objectFit:"fill"}} src="https://picsum.photos/200/300" alt="Item 6" />
        </div>
      </Carousel>
    </Box>
  );
};

export default CarouselWithMultiItems;
