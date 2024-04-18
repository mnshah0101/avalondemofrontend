import { useState, useRef, useEffect } from 'react';

import { FormControl, InputLabel, Input, FormHelperText, TextareaAutosize } from '@mui/material';

import { io } from 'socket.io-client';

import Chat from '../chat/BotChat';
import UserChat from '../chat/UserChat';

export default function Rachel2() {
  const [input, setInput] = useState('');
  const [chats, setChats] = useState([]);
  const [responses, setResponses] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const chatsDiv = useRef(null);

  // handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim() !== '') {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  const updateLastMessage = (message) => {
    setResponses((prevChats) => {
      prevChats.pop();
      return [...prevChats, message];
    });
  };

  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setChats([...chats, input]);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setResponses([...responses, 'Thinking...']);

      const socket = io('ws://127.0.0.1:5000');

      socket.on('connect', () => {
        console.log('Connected to the server.');

        // Emit a message to the 'rachel' event
        socket.emit('rachel', { question: input, pinecone_index: 'avalondemobucket' });

        socket.on('rachel', (data) => {
          if (data.done !== true) {
            updateLastMessage(data.answer);
          }
        });
      });
    }
    setInput('');

    setIsEnabled(false);
  };

  return (
    <div className="flex flex-col justify-between p-3 bg-neutral-800 text-white rounded-lg px-5">
      <div ref={chatsDiv} className="mt-0 text-xs" style={{ height: '70vh', overflowY: 'scroll' }}>
        {chats.map((chat, index) => (
          <div>
            <UserChat className="my-7" text={chat} />
            <Chat className="my-7" text={responses[index]} />
          </div>
        ))}
      </div>

      <FormControl>
        <div className="flex">
          <TextareaAutosize
            id="my-input"
            placeholder="Type your message here..."
            aria-describedby="my-helper-text"
            onChange={(e) => handleInputChange(e)}
            style={{
              width: '90%',
              backgroundColor: 'rgba(0,0,0,0)',
              resize: 'none',
              borderRadius: '8px',
            }}
            value={input}
          />
          <div style={{ height: '45px' }}>
            <button
              className="ml-4 px-4 rounded-md text-white"
              type="submit"
              disabled={!isEnabled}
              onClick={(e) => handleFormSubmit(e)}
              style={{ backgroundColor: '#ffffff', height: '100%' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.54056 2.18391C7.79803 1.9387 8.20263 1.9387 8.4601 2.18391L13.1268 6.62835C13.3934 6.88228 13.4037 7.30426 13.1498 7.57088C12.8958 7.8375 12.4738 7.84779 12.2072 7.59387L8.66699 4.22222V13.3333C8.66699 13.7015 8.36852 14 8.00033 14C7.63214 14 7.33366 13.7015 7.33366 13.3333V4.22222L3.79343 7.59387C3.52681 7.84779 3.10483 7.8375 2.8509 7.57088C2.59698 7.30426 2.60727 6.88228 2.87389 6.62835L7.54056 2.18391Z"
                  fill="#262626"
                />
              </svg>
            </button>
          </div>
        </div>
      </FormControl>
    </div>
  );
}
