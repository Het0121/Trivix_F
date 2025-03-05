import React from "react";
import { Grid, Image, Input, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CustomIcon from "../../../shared/Icon";
import { theme } from "../../../Theme/theme";

const ChatSidebar = ({ chatList, openChat }) => {
  return (
    <Grid.Column
      width={16}
      style={{
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <a href="/">
          <div style={{ display: "flex", alignItems: "center" }}>
            <CustomIcon
              name="arrow left"
              size="large"
              style={{ color: theme.colors.orange, cursor: "pointer" }}
              //   color={theme.colors.orange}
            />
            <Header style={{ margin: "0px", color: theme.colors.orange }}>
              Chat
            </Header>
          </div>
        </a>
        <Icon
          name="edit"
          size="large"
          style={{
            marginLeft: "auto",
            cursor: "pointer",
            color: theme.colors.orange,
          }}
        />
      </div>
      <Input
        icon="search"
        placeholder="Search..."
        fluid
        style={{ marginBottom: "15px" }}
      />
      {chatList.map((chat) => (
        <Link
          to={`/chat/${chat.id}`}
          key={chat.id}
          style={{ textDecoration: "none" }}
        >
          <div
            onClick={() => openChat(chat.id)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 10px",
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
          >
            <Image src={chat.avatar} avatar />
            <div style={{ marginLeft: "10px", flex: 1 }}>
              <strong>{chat.name}</strong>
              <p style={{ fontSize: "12px", color: "gray" }}>
                {chat.lastMessage}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </Grid.Column>
  );
};

export default ChatSidebar;
