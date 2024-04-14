import { Helmet } from 'react-helmet-async';

import FileUpload from 'src/sections/file-upload/view';

import './global.css';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <FileUpload />
    </>
  );
}
