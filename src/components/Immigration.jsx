import React, { useState } from 'react';
import axios from 'axios';

function Immigration() {
  const [photo, setPhoto] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [result, setResult] = useState(null);

  const handlePhotoChange = (e) => setPhoto(e.target.files[0]);
  const handleIdCardChange = (e) => setIdCard(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('id_card', idCard);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading files', error);
    }
  };

  return (
    <div>
      <h1>Upload Photos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Photo:
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </label>
        </div>
        <div>
          <label>
            ID Card:
            <input type="file" accept="image/*" onChange={handleIdCardChange} />
          </label>
        </div>
        <button type="submit">Upload</button>
      </form>
      {result && (
        <div>
          <h2>Result</h2>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}

export default Immigration;
