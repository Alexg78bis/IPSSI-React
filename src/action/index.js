export const MESSAGE_ADD = 'MESSAGE_ADD';
export const MESSAGE_GET = 'MESSAGE_GET';

export const GET_MESSAGE_PENDING_ACTION = "GET_MESSAGE_PENDING_ACTION"
export const GET_MESSAGE_SUCCESS_ACTION = "GET_MESSAGE_SUCCESS_ACTION"
export const GET_MESSAGE_FAILED_ACTION = "GET_MESSAGE_FAILED_ACTION"

export const addMessage = (message) => ({
  type: 'MESSAGE_ADD',
  message
})

export const getMessages = () =>{
  return dispatch => {
    dispatch({type: MESSAGE_GET});

    return fetch("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages")
      .then(response => response.json())
      .then(messages => {
        dispatch({type: GET_MESSAGE_SUCCESS_ACTION, messages});
      })
      .catch(error => {
        dispatch({type: GET_MESSAGE_FAILED_ACTION, error})
      })
  }
}