import React from 'react'

import '../styles.css'
import MessageItem from './messageItem'
import {getMessage } from '../action'
import { connect } from 'react-redux'


class MessageListComponent extends React.Component {

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    console.log('snapshot', snapshot)
  }

  render () {
    return (
      <div className="messageList">
        <div>👅 JoliChat</div>
        <div className="messages">
          {this.props.messages.map((message, key) =>
            <MessageItem message={message} key={key}/>
          )}

          {(() => {
            if (this.props.messages.length < 1) {
              return 'Pas de message 🎈'
            }
          })()}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    messages: state.messages
  })
}

const MessageList = connect(
  mapStateToProps,
)(MessageListComponent)

export default MessageList
