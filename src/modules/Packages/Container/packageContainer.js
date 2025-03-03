import { useMediaQuery } from "@react-hook/media-query";
import React, { useEffect } from "react";
import { Grid, GridColumn, Header } from "semantic-ui-react";
import ChatBox from "../../../components/Chat";
import NotificationBar from "../../../components/Notification";
import PackageCard from "../Components/packageCard";
import TouristCard from "../Components/TouristCard";
import axios from "axios";
import { theme } from "../../../Theme/theme";
import Nav from "../Components/Nav";
import TravelCards from "../Components/TravelCards";
const PackageContainer = () => {
  // const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const res = axios.post("http://localhost:8000/api/v1/agency/login", {
      userName: "skyline_travels",
      password: "Het@123",
    });
    console.log(res.data, "res");
    return res;
  });

  return (
    <Grid columns="equal" style={{ height: "100%" }}>
      <Grid.Row style={{ display: "flex", justifyContent: "center " }}>
        {/* Main content (Image Carousel) */}
        <GridColumn
          mobile={16}
          tablet={16}
          computer={16}
          largeScreen={16}
          style={{
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Nav />
          <PackageCard />
          <TouristCard />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Header as={"h3"} style={{ margin: "0" }}>
              Group Trips
            </Header>
            <Header
              as={"h4"}
              style={{
                margin: "0",
                fontWeight: "300",
                color: theme.colors.gray,
              }}
            >
              See All
            </Header>
          </div>
          <TravelCards />
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
};

export default PackageContainer;
