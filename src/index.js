import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import './styles.css'
import reducer from './reducer/'
import { Provider } from 'react-redux'
import Login from './component/login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Chat from './component/chat'

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
