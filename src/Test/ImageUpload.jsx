import React, { useState } from 'react';
import axios from 'axios'


function App() {

  const [image, setimage] = useState(null)

  function handleChange(e) {
    const file = e.target.files[0]

    if (file) { setimage(e.target.files[0]) }
  }

  async function handleSubmit(e) {

    e.preventDefault();

    // Create a FormData object and append the file
    if (image) {

      const formData = new FormData();
      formData.append('image', image);
      console.log(image)

      try {
        const response = await axios.post('http://localhost:4000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })

        console.log('Image Uploaded Successfully', response.data);
        setimage(null)

      } catch (error) {
        console.error('Error uploading image:', error);
        setimage(null)
      }
    } else {
      alert('Please select an image');
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type='file' accept='image/*' onChange={handleChange} />

      <button type='submit'>Upload</button>

    </form >
  );

}

export default App;
