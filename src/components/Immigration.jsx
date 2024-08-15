import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Immigration() {
  const [photo, setPhoto] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
};


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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <button
                type="button"
                onClick={handleBackClick}
                className="absolute top-4 left-4 bg-white text-indigo-900 py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
            >
                Back
        </button>
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Upload Photos</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo:
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ID Card:
            <input
              type="file"
              accept="image/*"
              onChange={handleIdCardChange}
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Upload
        </button>
      </form>
      {result && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <h2 className="text-lg font-semibold">Result</h2>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}

export default Immigration;
