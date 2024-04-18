import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Typography } from '@mui/material';

export default function FileViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          plugins={[defaultLayoutPluginInstance]}
          fileUrl="https://avalondemobucket.s3.amazonaws.com/2023 ISBA High School Mock Trial Problem_20240415210525.pdf"
        />
      </Worker>
    </>
  );
}
