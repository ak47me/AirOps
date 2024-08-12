import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flights, Food, Home, Booking, Immigration, Navbar, Display } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/food" element={<Food />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/display-flights" element={<Display />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;