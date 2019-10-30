import messages from '../reducer/messages'

export const addMessage = (message) => ({
  type: 'MESSAGE_ADD',
  message
})