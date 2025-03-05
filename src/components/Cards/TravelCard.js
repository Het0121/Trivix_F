import React from "react";
import { Card, Image, List, ListItem } from "semantic-ui-react";
import { theme } from "../../Theme/theme";
import Cardimg from "../../assets/images/card3.png";
import CustomIcon from "../../shared/Icon";

const TravelCard = ({ item, style = {} }) => {
  return (
    <div
      style={{
        padding: "0px 5px",
        display: "flex",
        justifyContent: "center",
        margin: "0px",
      }}
    >
      <Card
        style={{
          backgroundColor: theme.colors.white,
          color: theme.colors.white,
          width: "300px",
          height: "100%",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "none",
          margin: 0,
          position: "relative",
        }}
      >
        <Image
          src={Cardimg}
          ui={true}
          style={{
            width: "100%",
            objectFit: "cover",
            maxHeight: "120px",
            padding: 0,
          }}
        />
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <CustomIcon name="heart outline" size="large" color="red" />
        </div>
        <Card.Content style={{ gap: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Card.Header
                style={{
                  color: theme.colors.orange,
                  padding: "0px",
                  fontWeight: "500",
                }}
              >
                {item.title || ""}
              </Card.Header>
              <Card.Header
                style={{
                  color: theme.colors.gray,
                  padding: "0px",
                  fontWeight: "300",
                  fontSize: "9px",
                }}
              >
                {item.duration || ""}
              </Card.Header>
            </div>
            <div>
              <CustomIcon
                name="plus circle"
                size="big"
                color="red"
                style={{ color: "#fff" }}
              />
            </div>
          </div>
          <Card.Description
            style={{
              display: "flex",
              gap: "10px",
              border: "none",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {["plane", "hotel", "car", "camera"].map((icon) => (
              <CustomIcon
                key={icon}
                name={icon}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                }}
              />
            ))}
          </Card.Description>
          <Card.Content extra style={{ marginTop: "10px" }}>
            <List bulleted>
              {item.info.map((icon) => (
                <ListItem
                  style={{
                    fontSize: "9px",
                    color: theme.colors.gray,
                  }}
                >
                  {icon}
                </ListItem>
              ))}
            </List>
          </Card.Content>
        </Card.Content>
      </Card>
    </div>
  );
};

export default TravelCard;
