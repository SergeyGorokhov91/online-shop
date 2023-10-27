import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {mainCarouselData} from "./MainCarouselData";
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = mainCarouselData.map((item) =>
    <img
      className="cursor-pointer"
      src={item.image}
      role="presentation"
      alt=""
    />
  )

  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>
  )
}

export default MainCarousel;