import React from "react";
import CustomSlider from "../../../components/Slider";
import VerticleCard from "../../../components/Cards/verticleCard";
import img from "../../../assets/images/pexels-souvenirpixels-414612.jpg";

const TouristCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1444,
        settings: { slidesToShow: 5, slidesToScroll: 3 },
      },
      {
        breakpoint: 1025,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    { title: "Elliot", meta: "Gandhinagar", src: img },
    { title: "RedFish Lake", meta: "Idaho", src: img },
    { title: "Blue Lake", meta: "California", src: img },
    { title: "RedFish Lake", meta: "Idaho", src: img },
    { title: "Blue Lake", meta: "California", src: img },
    { title: "RedFish Lake", meta: "Idaho", src: img },
    { title: "Blue Lake", meta: "California", src: img },
    { title: "RedFish Lake", meta: "Idaho", src: img },
    { title: "Blue Lake", meta: "California", src: img },
  ];

  return (
    <div style={{ padding: "20px 0px" }}>
      <CustomSlider settings={settings}>
        {data.map((item, index) => (
          <div key={index} style={{ padding: "20px 5px" }}>
            <VerticleCard item={item} />
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default TouristCard;
