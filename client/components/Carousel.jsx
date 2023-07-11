import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WineCard from "../components/WineCard.jsx";


export default function Carousel(props) {
  const { data } = props;  
  
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    prevArrowStyles: "white"
  };
  

  return (
    <div className="cardContainer">
      {data.length > 0 
      ? ( 
        <Slider {...settings}>
          {data.map((elem, i) => 
            <WineCard
              key={i}
              winery={elem.winery}
              wine={elem.wine}
              rating={elem.rating}
              location={elem.location}
              image={elem.image}
              id={elem.id}
                
            
            />
          )}
        </Slider>
        ) 
        : (
        <div>No data available.</div> // Render alternative message if data is empty
      )}
    </div>
  );
}
