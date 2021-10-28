import React from 'react'

import {ChatEngine} from 'react-chat-engine'

import ChatFeed from './component/ChatFeed'

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_PROJECT_USER_NAME}
      userSecret={process.env.REACT_APP_PROJECT_USER_PASS}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App
