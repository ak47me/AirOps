import React from 'react';

const BoardingPass = ({ passengerName, flightNumber, departureTime, arrivalTime, gate, seat }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="text-2xl font-bold">Boarding Pass</h2>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Passenger</h3>
          <p className="text-gray-700">{passengerName}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Flight</h3>
          <p className="text-gray-700">{flightNumber}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Departure</h3>
          <p className="text-gray-700">{departureTime}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Arrival</h3>
          <p className="text-gray-700">{arrivalTime}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Gate</h3>
          <p className="text-gray-700">{gate}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Seat</h3>
          <p className="text-gray-700">{seat}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;