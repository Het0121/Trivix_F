import React, { useEffect, useRef, useState } from "react";
import { Image, Segment, Comment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import EmojiPicker from "emoji-picker-react";
import Form from "../../shared/Form/Form";
import Fields from "../../shared/Form/Fields/Fields";
import CustomIcon from "../../shared/Icon";
import { Button } from "../../shared";
import * as Yup from "yup";

const schema = Yup.object().shape({
  input: Yup.string(),
});

const PostBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);
  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, id: Date.now() }]);
    setInput(""); // Clear input field
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
  };

  return (
    <Segment
      style={{
        maxWidth: "400px",
        margin: "auto",
        borderRadius: "7px",
        boxShadow: "none",
        padding: "20px",
        background: "transparent",
        position: "relative",
      }}
    >
      {messages.length === 0 ? (
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Have a Good Day <br />
        </h2>
      ) : (
        <div
          style={{
            maxHeight: "180px",
            overflowY: "auto",
            paddingRight: "10px",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <Comment.Group>
            {messages.map((msg) => (
              <Comment key={msg.id}>
                <Comment.Content>
                  <Comment.Author>User</Comment.Author>
                  <Comment.Text>{msg.text}</Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
        </div>
      )}

      <Form validateSchemas={schema} onSubmit={handleSend}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* User Avatar */}
          <Image
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            avatar
          />

          {/* Input Field */}
          <Fields.Input
            name="input"
            placeholder="What’s Happening?"
            fluid
            style={{
              border: "none",
              fontSize: "16px",
              flex: 1,
              outline: "none",
              padding: "10px",
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Icon Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <CustomIcon
              name="image outline"
              size="large"
              style={{ fontSize: "22px" }}
            />
            <CustomIcon
              name="smile outline"
              size="large"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              style={{ cursor: "pointer", fontSize: "22px" }}
            />
          </div>

          {/* Post Button */}
          <Button
            content="Post"
            color="blue"
            style={{
              borderRadius: "20px",
              padding: "10px 20px",
              fontWeight: "bold",
            }}
            onClick={handleSend}
          />
        </div>
      </Form>

      {showEmojiPicker && (
        <div style={{ position: "absolute", zIndex: 10, marginTop: "10px" }}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </Segment>
  );
};

export default PostBox;
