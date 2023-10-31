import React from 'react';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import {Button} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


function HomeSectionCarousel({data,sectionName}) {
  const responsive = {
    200: { items: 1 },
    420: { items: 2 },
    768: { items: 3 },
    1200: { items: 5.3 },
    1900: { items: 6.3 }
  };

  const items = data.slice(0,10).map((i)=><HomeSectionCard product={i}/>)

  const renderNextButton = ({ isDisabled }) => isDisabled ? null : (
    <Button
      variant="contained"
      className="
                  z-50
                  bg-white
                  "
      sx={{
        position: "absolute",
        top: "8rem",
        right: "-2.5rem",
        transform: "translateX(50%) rotate(90deg)",
        bgcolor: "white",
        color: "black"
      }}
      aria-label="next"
    >
      <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
    </Button>
  );

  const renderPrevButton = ({ isDisabled }) => isDisabled ? null : (
    <Button
      variant="contained"
      className="
                  z-50
                  bg-white
                  "
      sx={{
        position: "absolute",
        top: "8rem",
        left: "-2.5rem",
        transform: "translateX(-50%) rotate(90deg)",
        bgcolor: "white",
        color: "black"
      }}
      aria-label="prev"
    >
      <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
    </Button>
  );


  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative px-10 py-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;