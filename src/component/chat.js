import React from 'react'

import '../styles.css'
import MessageList from './messageList'
import MessageBar from './messageBar'

export default class Chat extends React.Component {

  render () {
    return (
      <div className="chat">
        <MessageList/>
        <MessageBar/>
      </div>
    )
  }
}

