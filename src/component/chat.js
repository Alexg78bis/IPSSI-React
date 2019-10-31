import React from 'react'
import { connect } from 'react-redux'
import '../styles.css'

import {getMessages} from '../action'

const mapDispatchToProps = {
  getMessages
};

export default connect(null, mapDispatchToProps)(Chat)
