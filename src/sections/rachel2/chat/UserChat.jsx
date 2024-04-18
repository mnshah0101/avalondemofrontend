import { faker } from '@faker-js/faker/locale/af_ZA';

import { Avatar } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function UserChat({ text, ...props }) {
  return (
    <div className="flex flex-col" {...props}>
      <div className="flex flex-row">
        <Avatar
          sx={{ width: 30, height: 30 }}
          src="https://ui-avatars.com/api/?name=Moksh+Shah&background=ffffff&color=262626"
        />
        <div className="flex flex-col justify-center">
          <h6 className="ml-4 font-bold">Moksh Shah</h6>
        </div>
      </div>
      <div className="ml-12">
        <p>{text}</p>
      </div>
    </div>
  );
}
