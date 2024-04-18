import { FileInput, Label } from 'flowbite-react';
import { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { Grid, Typography } from '@mui/material';
import AppWidgetSummary from 'src/sections/overview/app-widget-summary';
import { faker } from '@faker-js/faker/locale/af_ZA';
import AppNewsUpdate from 'src/sections/overview/app-news-update';
import Documents from 'src/sections/products/view';
import './loader.css';

export default function FileUpload() {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  async function onChange(event) {
    try {
      const files = event.target.files;
      console.log(files);

      if (files.length < 1) return;

      // make post request to http://127.0.0.1:5000/uploadFiles with files
      const formData = new FormData();
      for (let i = 0; i < files.length; i += 1) {
        formData.append('files', files[i]);
      }

      setLoading(true);

      const response = await fetch('http://127.0.0.1:5000/uploadFiles', {
        method: 'POST',
        body: formData,
      });

      setLoading(false);

      const data = await response.json();
      console.log(data);

      if (data.success === 'Successfully uploaded') {
        console.log('Files uploaded successfully');
        setUploaded(true);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Citizens United v. Federal Election Commission
      </Typography>
      <div className="flex w-full items-center justify-center ">
        <Label
          htmlFor="dropzone-file"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div
            className="flex flex-col items-center justify-center pb-6 pt-5"
            style={{ display: !uploaded ? '' : 'none' }}
          >
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
              style={{ display: loading ? 'none' : 'block' }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p
              className="mb-2 text-sm text-gray-500 dark:text-gray-400"
              style={{ display: loading ? 'none' : 'block' }}
            >
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <div className="loader-div">
              <ThreeCircles
                visible={loading}
                height="100"
                width="100"
                color="#000000"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
              />
            </div>
            <p
              className="text-xs text-gray-500 dark:text-gray-400"
              style={{ display: loading ? 'none' : 'block' }}
            >
              Upload Case Files
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center pb-6 pt-5"
            style={{ display: uploaded ? '' : 'none' }}
          >
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="75px"
              height="75px"
              viewBox="0 0 78.369 78.369"
            >
              <g>
                <path
                  d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
		c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
		C78.477,17.894,78.477,18.586,78.049,19.015z"
                />
              </g>
            </svg>
            <h1>Files uploaded successfully</h1>
          </div>

          <FileInput id="dropzone-file" className="hidden" multiple onChange={(e) => onChange(e)} />
        </Label>
      </div>

      <div className="ml-7">
        <Grid container spacing={3} className="my-10">
          <Documents />
        </Grid>
      </div>
    </>
  );
}
