import React from "react";
import { List, Image } from "semantic-ui-react";
import CustomButton from "../../shared/Button";

const notifications = [
  {
    id: 1,
    name: "Het",
    action: "Liked your post.",
    time: "10:04 AM",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    follow: false,
  },
  {
    id: 2,
    name: "Siddhi",
    action: "Started following you.",
    time: "10:00 AM",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    follow: true,
  },
  {
    id: 3,
    name: "Hannah Flores",
    action: "Commented on your post: Good luck",
    time: "9:56 AM",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    follow: true,
  },
  {
    id: 4,
    name: "Param",
    action: "Liked your post.",
    time: "9:55 AM",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    follow: false,
  },
  {
    id: 5,
    name: "Jeel",
    action: "Liked your post.",
    time: "9:55 AM",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    follow: false,
  },
  {
    id: 6,
    name: "Raman",
    action: "Started following you.",
    time: "8:02 PM",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    follow: true,
  },
];

const NotificationBar = () => {
  return (
    <List
      divided
      style={{
        width: "100%",
        maxWidth: "100vW",
        margin: "auto",
        borderRadius: "7px",
        boxShadow: "none",
        border: "1px solid #ddd",
        // padding: "10px",
        // height: "100%",
      }}
    >
      {notifications.map((notification) => (
        <List.Item
          key={notification.id}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            flexWrap: "wrap", // Makes sure content wraps on small screens
          }}
        >
          <Image avatar src={notification.avatar} />
          <List.Content
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1, // Makes text take available space
              padding: "0px 10px",
              minWidth: "150px",
            }}
          >
            <List.Header
              as="a"
              style={{
                fontSize: "1rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {notification.name}
            </List.Header>
            <List.Description style={{ fontSize: "0.85rem" }}>
              {notification.action}{" "}
              <span style={{ color: "gray", fontSize: "0.8rem" }}>
                {notification.time}
              </span>
            </List.Description>
          </List.Content>
          <div style={{ minWidth: "80px", textAlign: "right" }}>
            {notification.follow && (
              <CustomButton
                primary
                size="tiny"
                style={{ fontSize: "0.8rem", padding: "5px 10px" }}
              >
                Follow
              </CustomButton>
            )}
          </div>
        </List.Item>
      ))}
    </List>
  );
};

export default NotificationBar;
