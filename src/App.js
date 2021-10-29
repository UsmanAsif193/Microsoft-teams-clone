import React, { useState } from "react";

import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  if (!localStorage.getItem("userName"))
    return (
      <LoginForm
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
      />
    );
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_PROJECT_USER_NAME}
      userSecret={process.env.REACT_APP_PROJECT_USER_PASS}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
