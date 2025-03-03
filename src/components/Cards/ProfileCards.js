import React from "react";
import { Card, Image } from "semantic-ui-react";
import userProfile from "../../assets/images/Ellipse 194.svg";
import backgroundImg from "../../assets/images/Placeholder.png";
import { Button } from "../../shared";
import CustomIcon from "../../shared/Icon";
const ProfileCard = () => {
  return (
    <div style={{ padding: 10, borderRadius: "15px" }}>
      <Card centered style={{ borderRadius: "15px", overflow: "hidden" }}>
        <Image
          src={backgroundImg}
          style={{ objectFit: "cover", height: "90px" }}
        />
        <Image
          src={userProfile}
          circular
          centered
          style={{
            marginTop: "-40px",
            width: "70px",
          }}
        />
        <Card.Content
          textAlign="center"
          padding={"20px"}
          style={{ border: "none" }}
        >
          <Card.Meta>100 Following &nbsp; 100 Followers</Card.Meta>
          <Card.Meta style={{ display: "flex", marginLeft: "50px" }}>
            <CustomIcon
              name="map marker alternate"
              title={" Gandhinagar"}
              style={{ display: "flex", gap: "10px" }}
            />
          </Card.Meta>
          <div style={{ marginTop: "10px" }}>
            <a href="/profile">
              <Button color="orange" fluid style={{ borderRadius: "20px" }}>
                Profile
              </Button>
            </a>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProfileCard;
