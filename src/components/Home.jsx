import React from "react";
import Navbar from "./Navbar";
import { PlaneCanvas } from "./canvas";
import { motion } from "framer-motion";
import { redirectDocument, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/flights');
    };
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-indigo-700 text-white">
        <Navbar />
        <div className="flex flex-col items-center mt-8">
          <PlaneCanvas />
          <h1 className="text-5xl font-extrabold mb-4 mt-6 drop-shadow-lg">
            Welcome to AirOps
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-center">
            Experience seamless and affordable flight bookings with AirOps. We offer unparalleled convenience for all your travel needs.
          </p>
          <button className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300" onClick={handleRedirect}>
            Book My Tickets
          </button>
        </div>
      </div>
    );
  };
  

export default Home;