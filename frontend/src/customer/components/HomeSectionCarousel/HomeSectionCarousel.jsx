import React from 'react';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import {Button} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


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
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <Button variant="contained"
                className="
                z-50
                bg-white
                "
                sx={{
                  position:"absolute",
                  top:"8rem",
                  right:"0rem",
                  transform:"translateX(50%) rotate(90deg)",
                  bgcolor:"white"
                }}
                aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{
            transform:"rotate(90deg)",
            color:"black"}}/>
        </Button>
        <Button variant="contained"
                className="
                z-50
                bg-white
                "
                sx={{
                  position:"absolute",
                  top:"8rem",
                  left:"0rem",
                  transform:"translateX(-50%) rotate(90deg)",
                  bgcolor:"white"
                }}
                aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{
            transform:"rotate(-90deg)",
            color:"black"}}/>
        </Button>
      </div>
    </div>
  );
}

export default HomeSectionCarousel;