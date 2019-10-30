import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'

import '../styles.css'

function MessageItem (props) {
  return (
    <div className="messageItem">
      <p className="author">@{props.message.author}</p>
      <span role='img' aria-label="message" className="message"><Emoji text={props.message.content}/></span>
    </div>
  )
}

MessageItem.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })
}

export default MessageItem
