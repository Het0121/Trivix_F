import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import userProfile from "../../../assets/images/Ellipse 194.svg";
import CustomeSearch from "../../../components/Search";
import CustomIcon from "../../../shared/Icon";

const Nav = () => {
  return (
    <Grid
      //   stackable
      style={{
        background: "transparent",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Grid.Row columns={2} style={{ display: "flex", alignItems: "center" }}>
        {/* Left Section - Profile & Location */}
        <Grid.Column
          computer={9}
          tablet={9}
          mobile={10}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Image src={userProfile} circular size="mini" />
          <div>
            <Header as="h5" style={{ margin: 0 }}>
              Current Location
            </Header>
            <CustomIcon name="map marker alternate" title="Gandhinagar" />
          </div>
        </Grid.Column>

        {/* Right Section - Search */}
        <Grid.Column
          computer={7}
          tablet={7}
          mobile={6}
          textAlign="right"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <CustomeSearch />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Nav;
