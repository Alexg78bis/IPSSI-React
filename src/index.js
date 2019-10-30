import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from 'redux'

import "./styles.css";
import Chat from "./component/chat";
import reducer from './reducer/'
import { Provider } from 'react-redux'

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  )
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
