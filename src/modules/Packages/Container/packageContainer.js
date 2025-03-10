import React, { useEffect } from "react";
import { Grid, GridColumn, Header, Image } from "semantic-ui-react";
import { theme } from "../../../Theme/theme";
import Nav from "../Components/Nav";
import PackageCard from "../Components/packageCard";
import TouristCard from "../Components/TouristCard";
import TravelCards from "../Components/TravelCards";
import { useNavigate, useParams } from "react-router-dom";
import DetailpackageContainer from "./DetailpackageContainer";
import { useDispatch, useSelector } from "react-redux";
import { allPackagesRequest, detailPackagesRequest } from "../Actions";
import loader from "../../../assets/images/giphy.gif";
const PackageContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateDetailpage = (id) => {
    navigate(`/packages/${id}`);
    dispatch(detailPackagesRequest(id));
  };
  console.log(id);
  const { data, loading } = useSelector((state) => state.Allpackages);

  useEffect(() => {
    dispatch(allPackagesRequest());
  }, [dispatch]);

  return (
    <Grid columns="equal" style={{ height: "100%" }}>
      <Grid.Row
        style={{ display: "flex", justifyContent: "center", padding: 0 }}
      >
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
          {!id ? (
            <>
              <Nav />
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100vh",
                    width: "100%",
                  }}
                >
                  <Image
                    src={loader}
                    ui={false}
                    style={{ width: "60px", marginLeft: "-10px" }}
                  />
                  <Header as="h2">Loading...</Header>
                </div>
              ) : (
                <>
                  <PackageCard
                    data={data}
                    handleNavigateDetailpage={handleNavigateDetailpage}
                  />
                  <TouristCard
                    data={data}
                    handleNavigateDetailpage={handleNavigateDetailpage}
                  />
                </>
              )}
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",

                    width: "100%",
                  }}
                />
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Header
                      as={"h3"}
                      style={{ margin: "0", marginLeft: "10px" }}
                    >
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
                    data={data}
                    handleNavigateDetailpage={handleNavigateDetailpage}
                  />
                </>
              )}
            </>
          ) : (
            <GridColumn
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DetailpackageContainer id={id} />
            </GridColumn>
          )}
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
};

export default PackageContainer;
