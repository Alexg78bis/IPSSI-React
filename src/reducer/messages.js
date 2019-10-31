import { MESSAGE_ADD } from '../action'

export default function message(state = [], action) {
  switch (action.type) {
    case MESSAGE_ADD:
      return [...state, action.message]

    default:
      return state
  }
}




