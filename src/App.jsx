import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flights, Food, Home, Booking, Immigration, Display, BoardingPass } from './components';
import { PlaneCanvas } from "./components/canvas";


const App = () => {
  const itinerary = {
    passengerName: 'John Doe',
    flightNumber: 'AB1234',
    departureTime: '2023-10-01 08:00',
    arrivalTime: '2023-10-01 12:00',
    gate: 'A12',
    seat: '12B'
  };
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
        <Route path="/pass" element={<BoardingPass {...itinerary} />} />
        <Route path="/plane" element={<PlaneCanvas />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;