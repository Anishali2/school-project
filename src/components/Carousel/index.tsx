import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '@/images/school1.jpg';
import img2 from '@/images/school2.jpg';

const index = () => {
  return (
    <div className="">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        showArrows={false}
      >
        {/* <div className="sm:h-[300px] md:h-[500px] lg:h-[800px]  text-black"> */}
        <div className="h-auto  text-black">
          <Image height={500} width={1400} src={img1} alt="logo" />
        </div>
        <div className="h-auto text-black">
          <Image height={500} width={1400} src={img2} alt="logo" />
        </div>
        <div className="h-auto text-black">
          <Image height={500} width={1400} src={img1} alt="logo" />
        </div>
      </Carousel>
    </div>
  );
};

export default index;
