export default function user(state = {}, action) {
  switch (action.type) {
    case 'USER_SET_USERNAME':
      return {
        ...state,
        username: action.username
      }

    default:
      return state
  }
}

