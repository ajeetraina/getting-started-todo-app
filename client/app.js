// App.js

import React, { useState, useEffect } from 'react';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/images')
      .then((response) => response.json())
      .then((data) => {
        setImages(data.images);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
