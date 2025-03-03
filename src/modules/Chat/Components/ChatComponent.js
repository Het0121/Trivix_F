import React, { useState } from "react";
import {
  Grid,
  Image,
  Input,
  Icon,
  Button,
  Header,
  Divider,
} from "semantic-ui-react";
import CustomIcon from "../../../shared/Icon";
import { theme } from "../../../Theme/theme";

const ChatApp = ({ messagesData, chatList }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const openChat = (chatId) => {
    setSelectedChat(chatList.find((chat) => chat.id === chatId));
    setMessages(messagesData[chatId] || []);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;
    setMessages([
      ...messages,
      { id: Date.now(), text: inputMessage, type: "sent" },
    ]);
    setInputMessage("");
  };

  return (
    <Grid divided style={{ height: "95vh", border: "none", boxShadow: "none" }}>
      {/* Sidebar */}
      <Grid.Column
        width={16}
        style={{
          display: selectedChat ? "none" : "block",
          overflowY: "auto",
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
                color={theme.colors.orange}
              />
              <Header style={{ margin: "0px", color: theme.colors.orange }}>
                Chat
              </Header>
            </div>
          </a>
          <Icon
            name="edit"
            size="large"
            color={theme.colors.orange}
            style={{ marginLeft: "auto", cursor: "pointer" }}
          />
        </div>
        <Input
          icon="search"
          placeholder="Search..."
          fluid
          style={{ marginBottom: "15px" }}
        />
        {chatList.map((chat) => (
          <div
            key={chat.id}
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
        ))}
      </Grid.Column>

      {/* Chat Area */}
      <Grid.Column
        width={16}
        style={{
          display: selectedChat ? "flex" : "none",
          flexDirection: "column",
          border: "1px solid #ddd",
          padding: "10px 20px 0px 20px",
          height: "95vh",
        }}
      >
        {/* Chat Header */}
        {selectedChat && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon
              name="arrow left"
              size="large"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedChat(null)}
            />
            <Image src={selectedChat.avatar} avatar />
            <div style={{ marginLeft: "10px", flex: 1 }}>
              <strong>{selectedChat.name}</strong>
              <p style={{ fontSize: "12px", color: "gray" }}>Active Now</p>
            </div>
            <Icon name="phone" size="large" />
          </div>
        )}
        <Divider />

        {/* Messages (Scrollable Chat Body) */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            maxHeight: "calc(95vh - 150px)",
            padding: "20px 5px",
            scrollbarWidth: "thin",
            scrollbarColor: "white",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent: msg.type === "sent" ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              {msg.type === "received" && (
                <Image src={selectedChat?.avatar || " "} avatar />
              )}
              <div
                style={{
                  background: msg.type === "sent" ? "#007bff" : "#e0e0e0",
                  color: msg.type === "sent" ? "#fff" : "#000",
                  padding: "10px",
                  borderRadius: "10px",
                  maxWidth: "80%",
                  fontSize: "14px",
                  textAlign: "left",
                  marginLeft: msg.type === "received" ? "10px" : "0",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        {selectedChat && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <Input
              placeholder="Send a message..."
              value={inputMessage}
              style={{ flex: 1 }}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <Button
              icon="send"
              color="blue"
              style={{ marginLeft: "10px" }}
              onClick={sendMessage}
            />
          </div>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ChatApp;
