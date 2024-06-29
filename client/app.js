// App.js

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function App() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const onDrop = async (acceptedFiles) => {
    try {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);

      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedImageUrl(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image, or click to select a file</p>
        )}
      </div>
      {uploadedImageUrl && <img src={uploadedImageUrl} alt="Uploaded Image" />}
    </div>
  );
}

export default App;
