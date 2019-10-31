import React from 'react'

import '../styles.css'
import { setUserName } from '../action'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";


class LoginPage extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }

    this.usernameChange = this.usernameChange.bind(this)
    this.useThisNameBtnClicked = this.useThisNameBtnClicked.bind(this)
  }

  usernameChange (event) {
    this.setState({ username: event.target.value })
  }

  useThisNameBtnClicked () {
    if (this.state.username) {
      this.props.setUserName(this.state.username)

       this.props.history.push("/chat")
    }
  }

  render () {
    return (
      <div className="Login">
        <input type="text" placeholder='username' onChange={this.usernameChange}/>
        <button onClick={this.useThisNameBtnClicked}>Utiliser ce nom</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserName: (username) => {
    dispatch(setUserName(username))
  }
})

const Login = connect(
  null,
  mapDispatchToProps
)(LoginPage)

export default Login

