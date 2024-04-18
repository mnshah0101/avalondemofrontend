// eslint-disable-next-line import/no-extraneous-dependencies
import Chatbot, { createChatBotMessage } from 'react-chatbot-kit';
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-chatbot-kit/build/main.css';
import './chatbot.css';
import { io } from 'socket.io-client';

import Markdown from 'react-markdown';

function ChatBotView(props) {
  const messages = [
    {
      role: 'assistant',
      content: 'You are Rachel, an AI lawyer.',
    },
  ];

  // eslint-disable-next-line react/prop-types, react/no-unstable-nested-components, no-shadow
  const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const updateLastMessage = (message) => {
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages.slice(0, -1), { ...prev.messages.at(-1), message }],
      }));
    };

    const addMessageToState = (message) => {
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };

    const handle = async (message) => {
      const json = {
        role: 'user',
        content: message,
      };
      messages.push(json);

      // change from here

      // eslint-disable-next-line no-import-assign
      addMessageToState(createChatBotMessage('Thinking...', { delay: -1000 }));

      const socket = io('ws://127.0.0.1:5000');

      socket.on('connect', () => {
        console.log('Connected to the server.');

        // Emit a message to the 'rachel' event
        socket.emit('rachel', { question: message, pinecone_index: 'avalondemobucket' });
      });

      socket.on('rachel', (data) => {
        if (data.done !== true) {
          updateLastMessage(data.answer);
        }
      });
      // ...

      /*

   socket.on('connect', () => {
    console.log('Connected to the server.');

    // Emit a message to the 'rachel' event
    socket.emit('rachel', {question:"Hi Rachel, how are you?", pinecone_index: "avalondemobucket"});

    socket.on('rachel', (rachel_message) => {
      console.log(rachel_message)
      if(rachel_message.done !== true){
    updateLastMessage(rachel_message.answer)
      }


    
});


});
   */
    };

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
      <div>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            actions: {
              handle,
            },
          })
        )}
      </div>
    );
  };

  // eslint-disable-next-line react/prop-types, react/no-unstable-nested-components
  const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
      // eslint-disable-next-line react/prop-types
      actions.handle(message);
    };

    return (
      <div>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            parse,
            actions,
          })
        )}
      </div>
    );
  };

  const config = {
    initialMessages: [createChatBotMessage(`Hi! How can I help you?`)],
    botName: 'R',
    customStyles: {},
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      headerText="Ask Rachel"
      placeholderText="Type a message..."
    />
  );
}

export default ChatBotView;
