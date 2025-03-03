import React from "react";
import CustomSlider from "../../../components/Slider";
import TravelCard from "../../../components/Cards/TravelCard";

const TravelCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: false,
    centerMode: false, // Enables centering effect
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1444,
        settings: { slidesToShow: 6, slidesToScroll: 3, centerPadding: "0px" },
      },
      {
        breakpoint: 1025,
        settings: { slidesToShow: 3, slidesToScroll: 1, centerPadding: "80px" },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  const travelData = [
    {
      id: 1,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
    {
      id: 2,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
    {
      id: 3,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
    {
      id: 4,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
    {
      id: 5,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
    {
      id: 6,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
    {
      id: 7,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
    {
      id: 8,
      title: "Swiss Alps",
      duration: "3 Days 4 Nights",
      info: [
        "Tour combo with return airport transfer",
        "City Tour",
        "Curious Corner",
        "Curious Corner",
      ],
    },
  ];

  return (
    <div style={{ padding: "20px 0px" }}>
      <CustomSlider settings={settings}>
        {travelData.map((item, index) => (
          <div key={index} style={{ padding: "20px 5px" }}>
            <TravelCard item={item} />
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default TravelCards;
