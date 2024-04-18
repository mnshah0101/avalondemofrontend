import { Helmet } from 'react-helmet-async';
import Rachel2 from 'src/sections/rachel2/view';
import FileViewer from 'src/sections/rachel2/file-view/FileViewer';
// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Ask Rachel </title>
      </Helmet>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <Rachel2 />
        </div>
        <div className="px-10 col-span-7" style={{ height: '80vh' }}>
          <FileViewer />
        </div>
      </div>
    </>
  );
}
