// Core viewer
// eslint-disable-next-line import/no-extraneous-dependencies
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';

import { useState, useEffect } from 'react';
// Plugins
// eslint-disable-next-line import/no-extraneous-dependencies
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Typography } from '@mui/material';
// eslint-disable-next-line react/prop-types
export default function File({ id }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/getUrlFromId', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        const data = await response.json();

        console.log(data);

        setFileUrl(data.url);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });

  console.log(id);

  if (fileUrl === '') return null;

  return (
    <>
      <div className="my-10">
        <Typography align="center" variant="h3">
          Document Viewer
        </Typography>
      </div>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={SpecialZoomLevel.PageFit}
          fileUrl="https://avalondemobucket.s3.amazonaws.com/2023 ISBA High School Mock Trial Problem_20240415210525.pdf"
        />
      </Worker>
      <div>hi</div>
    </>
  );
}
