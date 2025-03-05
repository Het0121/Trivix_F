import React from "react";
import { ImageGroup, Image } from "semantic-ui-react";
import useWindowSize from "../../hooks/Screen/index";

const ImageGroupSize = ({ PostImage }) => {
  const { width } = useWindowSize();
  const imageSize = width < 768 ? "small" : "medium";

  const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const Wrap = width >= 1444 ? null : style;

  console.log(imageSize);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <ImageGroup size={imageSize} style={Wrap}>
        {PostImage.map((Item, index) => (
          <Image
            key={index}
            src={Item.src}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ))}
      </ImageGroup>
    </div>
  );
};

export default ImageGroupSize;
