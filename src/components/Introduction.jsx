import React from 'react';
import BackgroundImage from '../assets/images/mybg.png'
import CarouselComp from '../helpers/Carousel';

const Introduction = () => (
  <div
    id="introduction"
    style={{
      height: '100%',
      // backgroundImage: `url(${BackgroundImage})`,
      backgroundColor:'#a3749b',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
      <CarouselComp />
  </div>
);

export default Introduction;
