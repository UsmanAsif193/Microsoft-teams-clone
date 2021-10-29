import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };
  const handleUplaod = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        className="message-input"
        placeholder="Send a Message"
        value={value}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple="false"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUplaod}
      />
      <button className="send-button" type="submit">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
