import React from 'react'

import {ChatEngine} from 'react-chat-engine'

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_PROJECT_USER_NAME}
      userSecret={process.env.REACT_APP_PROJECT_USER_PASS}
    />
  )
}

export default App
