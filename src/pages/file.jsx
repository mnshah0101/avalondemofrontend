import { Helmet } from 'react-helmet-async';

import File from 'src/sections/file/view';

import { useParams } from 'react-router-dom';
// ----------------------------------------------------------------------

export default function FilePage() {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title> Case Documents </title>
      </Helmet>

      <File id={id} />
    </>
  );
}
