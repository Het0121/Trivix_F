import React from "react";
import { Grid, GridColumn, Header } from "semantic-ui-react";
import { theme } from "../../../Theme/theme";
import Nav from "../Components/Nav";
import PackageCard from "../Components/packageCard";
import TouristCard from "../Components/TouristCard";
import TravelCards from "../Components/TravelCards";
import { useNavigate, useParams } from "react-router-dom";
import DetailpackageContainer from "./DetailpackageContainer";
const PackageContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigateDetailpage = (id) => {
    navigate(`/packages/${id}`);
  };

  console.log("Current ID from useParams():", id);
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
          {!id ? (
            <>
              <PackageCard
                handleNavigateDetailpage={handleNavigateDetailpage}
              />
              <TouristCard
                handleNavigateDetailpage={handleNavigateDetailpage}
              />

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
              <TravelCards
                handleNavigateDetailpage={handleNavigateDetailpage}
              />
            </>
          ) : (
            <DetailpackageContainer />
          )}
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
};

export default PackageContainer;
