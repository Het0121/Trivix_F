import React from "react";
import { Grid, GridColumn, Container } from "semantic-ui-react";
import ImageCarousel from "../../../components/PostsBlog";
import ChatBox from "../../../components/Chat";
import img from "../../../assets/images/pexels-souvenirpixels-414612.jpg";
import img2 from "../../../assets/images/ai-generated-mysterious-dark-forest-with-stars-in-the-sky-night-forest-with-full-moon-and-stars-in-the-sky-photo.jpg";
import img3 from "../../../assets/images/ai-generated-mysterious-night-sky-illuminates-tranquil-forest-revealing-cosmic-beauty-generated-by-ai-photo.jpg";
import NotificationBar from "../../../components/Notification";
import { useMediaQuery } from "@react-hook/media-query";
import Nav from "../../Packages/Components/Nav";

const HomeContainer = () => {
  const images = [img, img2, img3];
  const images2 = [img2, img, img3];
  const posts = [
    {
      userAvatar: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
      username: "John Doe",
      caption: "Enjoying the sunset!",
      images: [...images],
      comments: [
        { user: "Alice", text: "Wow, amazing view!" },
        { user: "Bob", text: "Looks so peaceful!" },
      ],
      captions: "Enjoying The Journey With Amazing Views",
    },
    {
      userAvatar: "https://react.semantic-ui.com/images/avatar/small/steve.jpg",
      username: "Jane Smith",
      caption: "Weekend hiking adventure!",
      images: [...images2],
      comments: [
        { user: "Charlie", text: "That looks like a great trail!" },
        { user: "Dave", text: "Wish I was there!" },
      ],
      captions: "Great Experience",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 1024px)");
  const isLaptop = useMediaQuery("(max-width: 1440px)");

  return (
    // <Container fluid style={{ minHeight: "100vh" }}>
    <>
      <Grid columns="equal" style={{ height: "100%" }}>
        <Grid.Row style={{ display: "flex", justifyContent: "center " }}>
          <GridColumn
            mobile={16}
            tablet={16}
            computer={isMobile ? 16 : 11}
            largeScreen={10}
            style={{
              marginBottom: "50px",
              display: "flex",
              justifyContent: "center ",
            }}
          >
            <ImageCarousel
              images={images}
              posts={posts}
              isLaptop={isLaptop}
              isMobile={isMobile}
            />
          </GridColumn>
          {!isMobile && (
            <GridColumn
              mobile={16}
              tablet={16}
              computer={isMobile ? 16 : 5}
              largeScreen={6}
            >
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <ChatBox />
                </div>
                <div>
                  <NotificationBar />
                </div>
              </div>
            </GridColumn>
          )}
        </Grid.Row>
      </Grid>
    </>
    // </Container>
  );
};

export default HomeContainer;
