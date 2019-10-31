import React from 'react'
import { connect } from 'react-redux'

import '../styles.css'
import { addMessage } from '../action'

class MessageBarComponent extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }

    console.log(this.state)

    this.onMessageChange = this.onMessageChange.bind(this)
    this.onSendBtnClick = this.onSendBtnClick.bind(this)
    this.onEnterKeyPress = this.onEnterKeyPress.bind(this)
  }

  onMessageChange (event) {
    this.setState({
      message: event.target.value
    })
  }

  onEnterKeyPress (event) {
    if (event.key === 'Enter') {
      this.onSendBtnClick()
    }
  }

  onSendBtnClick () {
    if (!this.state.message) {
      return false
    }

    this.props.sendMessage({
      author: this.props.user.username,
      content: this.state.message,
    })

    this.setState({ message: '' })
  }

  render () {
    return (
      <div className="messageBar">
        <input value={this.state.message} type="text" className="message" placeholder="Votre message"
               onKeyUp={this.onEnterKeyPress} onChange={this.onMessageChange}/>
        <button className="send" onClick={this.onSendBtnClick}>Envoyer</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => {
    dispatch(addMessage(message))
  }
})

const mapStateToProps = state => {

  console.log(state.user)
  return ({
    user: state.user
  })
}

const MessageBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBarComponent)

export default MessageBar
