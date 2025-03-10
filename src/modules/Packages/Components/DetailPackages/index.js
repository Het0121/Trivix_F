import React, { useEffect } from "react";
import { Image, Grid, Header, List, Container } from "semantic-ui-react";
import CustomIcon from "../../../../shared/Icon/index";
import bg from "../../../../assets/images/Group 1000001786 (1).png";
import { theme } from "../../../../Theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { detailPackagesRequest } from "../../Actions";
import loader from "../../../../assets/images/giphy.gif";
import useWindowSize from "../../../../hooks/Screen";
import { Button } from "../../../../shared/index";
import { useNavigate } from "react-router-dom";

const DetailPackagePage = ({ id }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const size = width < 768 ? "small" : "16px";

  const { detailData, loading } = useSelector((state) => state.Allpackages);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detailPackagesRequest(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate("/packages");
  };

  return (
    <div
      style={{
        padding: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Image src={loader} ui={false} style={{ width: "60px" }} />
          <Header as="h2" style={{ marginTop: "10px" }}>
            Loading...
          </Header>
        </div>
      ) : (
        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            background: "white",
            marginTop: isMobile ? "-20px" : "50px",
            maxWidth: "max-content",
            // padding: "20px",
          }}
        >
          <Grid
            stackable
            columns={isMobile ? 1 : 2}
            style={{ padding: "0px" }}
            fluid
            width={16}
          >
            <Grid.Column>
              <div style={{ position: "relative" }}>
                <Image
                  src={bg}
                  fluid
                  style={{
                    maxHeight: "1000px",
                    objectFit: "cover",
                    marginBottom: "-20px",
                  }}
                />
                <CustomIcon
                  name="arrow left"
                  style={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    color: "white",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                  onClick={handleBack}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={{ padding: "10px 20px", marginBottom: "0px" }}>
                <Header as="h2" style={{ color: theme.colors.orange }}>
                  {detailData?.title || ""}
                </Header>
                <Header
                  as="h4"
                  style={{
                    color: theme.colors.gray,
                    // marginBottom: "10px",
                    margin: 0,
                    paddingBottom: "20px",
                  }}
                >
                  {detailData?.agency.agencyName}
                </Header>
                <Grid columns={3} textAlign="center">
                  <Grid.Row>
                    <Grid.Column
                      width={7}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                      }}
                    >
                      <CustomIcon name="map marker alternate" />
                      <Header as="h4" style={{ margin: 0 }}>
                        {detailData?.mainLocation || ""}
                      </Header>
                    </Grid.Column>
                    <Grid.Column
                      width={2}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                      }}
                    >
                      <CustomIcon name="exchange" />
                    </Grid.Column>
                    <Grid.Column
                      width={7}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                      }}
                    >
                      <CustomIcon name="map marker alternate" />
                      <Header as="h4" style={{ margin: 0 }}>
                        {detailData?.fromLocation || ""}
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>

              <div style={{ padding: "20px" }}>
                <Header as="h4">About Destination</Header>
                <p>{detailData?.description}</p>
                <Button size="small" primary>
                  Read More
                </Button>
              </div>

              <div style={{ padding: "20px" }}>
                <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Header as="h4">Services & Facilities</Header>
                      <List bulleted>
                        {detailData?.servicesAndFacilities?.flatMap(
                          (service, index) =>
                            typeof service === "string"
                              ? service.split(",").map((item, i) => (
                                  <List.Item
                                    key={`${index}-${i}`}
                                    style={{
                                      fontSize: "14px",
                                      color: theme.colors.gray,
                                    }}
                                  >
                                    {item.trim()}
                                  </List.Item>
                                ))
                              : null
                        )}
                      </List>
                    </Grid.Column>
                    <Grid.Column style={{ boxShadow: "none" }}>
                      <Header as="h4">Activities</Header>
                      <List bulleted>
                        {detailData?.activities?.flatMap((activity, index) =>
                          typeof activity === "string"
                            ? activity.split(",").map((item, i) => (
                                <List.Item
                                  key={`${index}-${i}`}
                                  style={{
                                    fontSize: "14px",
                                    color: theme.colors.gray,
                                  }}
                                >
                                  {item.trim()}
                                </List.Item>
                              ))
                            : null
                        )}
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>

              <div style={{ padding: "20px" }}>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Header as="h4" style={{ fontSize: size }}>
                        Price:
                      </Header>
                      <p style={{ color: theme.colors.gray }}>
                        ₹{detailData?.price || "N/A"}
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h4" style={{ fontSize: size }}>
                        Available Slots:
                      </Header>
                      <p style={{ color: theme.colors.gray }}>
                        {detailData?.availableSlots || "N/A"}
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h4" style={{ fontSize: size }}>
                        Max Slots:
                      </Header>
                      <p style={{ color: theme.colors.gray }}>
                        {detailData?.maxSlots || "N/A"}
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <Button
                    size="large"
                    style={{
                      background: theme.colors.orange,
                      color: theme.colors.white,
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default DetailPackagePage;
