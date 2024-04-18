import { faker } from '@faker-js/faker/locale/af_ZA';
import Markdown from 'react-markdown';
import parse from 'html-react-parser';

import { Avatar } from '@mui/material';

function checkAnswer(text) {
  if (typeof text !== 'string') {
    return 'Thinking...';
  }
  if (text.includes('Answer:')) {
    text = text.replace('No relevant quotes', '');
    return text.split('Answer:')[1];
  }

  return 'Thinking...';
}

// eslint-disable-next-line react/prop-types
export default function BotChat({ text, ...props }) {
  return (
    <div className="flex flex-col" {...props}>
      <div className="flex flex-row">
        <Avatar
          sx={{ width: 30, height: 30 }}
          src="https://ui-avatars.com/api/?name=Rachel&background=ffffff&color=000000"
        />
        <div className="flex flex-col justify-center">
          <h6 className="ml-4 font-bold">Rachel</h6>
        </div>
      </div>
      <div className="ml-12">{parse(checkAnswer(text) || '')}</div>
    </div>
  );
}
