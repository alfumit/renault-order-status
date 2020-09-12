import React from 'react';

interface Message {
  open: boolean,
  message: string,
  setOpen: Function,
  setMessage: Function,
}

const MessageContext = React.createContext<Message>({
  open: false,
  message: 'Oops! Something happened',
  setOpen: () => {},
  setMessage: () => {},
});

export default MessageContext;
