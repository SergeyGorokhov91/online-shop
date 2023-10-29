import React from 'react';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

function HomeSectionCarousel() {
  const responsive = {
    200: { items: 1 },
    420: { items: 2 },
    768: { items: 3 },
    900: { items: 4 },
    1200: { items: 5 },
    1900: { items: 6 }
  };

  const items = [1,1,1,1,1,1,1,1,1,1].map(()=><HomeSectionCard/>)

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}

        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;