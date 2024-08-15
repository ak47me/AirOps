import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../assets/styles/booking.css';
import emailjs from '@emailjs/browser';
import { set } from "date-fns";
const Booking = () => {
    const location = useLocation();
    const iterinaryData = location.state;
    // Log the type of iterinaryData
    console.log('Type of iterinaryData:', typeof iterinaryData);
    // Log the entire object
    console.log('iterinaryData:', iterinaryData);
    // Log the itinerary object
    if (iterinaryData && iterinaryData.itinerary) {
        console.log('itinerary:', iterinaryData.itinerary);
        // Try accessing a specific property (replace 'propertyName' with an actual property name)
        console.log('Specific property:', iterinaryData.itinerary.id);
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Your ticket has been booked successfully! Your ID Number is ${iterinaryData.itinerary.id}`);
        const serviceId = 'service_fa270n7';
        const templateId = 'template_v2lho82';
        const publicKey = 'Gqz8q1xaI6yleHsUK';
        const departureTime = iterinaryData.itinerary.legs[0].departure;
        const arrivalTime = iterinaryData.itinerary.legs[0].arrival;
        const ID = iterinaryData.itinerary.id;
        const templateParams = {
            from_name: 'Abdulkadar',
            to_name: name,
            departure_time: departureTime,
            arrival_time: arrivalTime,
            ticket_id: ID,
            to_email: email,
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                
                console.log(result.text);
                setNotification('Ticket was sent to your email.');

            }, (error) => {
                console.log(error.text);
                setNotification('Ticket was sent to your email.');

            });
        setName('');
        setEmail('');
        setDob('');
        
    };


    return (
        <>

        <form 
        
        className="max-w-sm mx-auto mt-8"
        onSubmit={handleSubmit}
        >
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your First and Last Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
            <label htmlFor="dof" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Date of Birth</label>
            <input type="date" id="dof" value={dob} onChange={(e) => setDob(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-white-900 dark:text-dark-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book my ticket</button>
        </form>
        {notification && <div className="mt-4 text-center text-white">{notification}</div>}

        {iterinaryData.itinerary && 
 iterinaryData.itinerary.legs && 
 iterinaryData.itinerary.legs.length > 0 && (
  <div className="flight-timeline mt-8 p-6 bg-gradient-to-r from-indigo-600 to-purple-500 shadow-lg rounded-xl">
    <div className="flex items-center justify-between text-white">
      <div className="text-left">
        <h3 className="text-2xl font-bold">{iterinaryData.itinerary.legs[0].origin.name}</h3>
        <p className="text-sm mt-1">{iterinaryData.itinerary.legs[0].origin.id}</p>
      </div>

      <div className="relative flex-1 mx-6">
        <div className="flex items-center justify-between">
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
        </div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
          <svg className="w-8 h-8 transform rotate-90" fill="currentColor" viewBox="0 0 24 20">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V21h2V13.5l8 2.5z" />
          </svg>
        </div>
      </div>

      <div className="text-right">
        <h3 className="text-2xl font-bold">{iterinaryData.itinerary.legs[0].destination.name}</h3>
        <p className="text-sm mt-1">{iterinaryData.itinerary.legs[0].destination.id}</p>
      </div>
    </div>

    <div className="mt-4 text-center text-white">
      <p className="text-lg font-medium">{iterinaryData.itinerary.legs[0].departure} - {iterinaryData.itinerary.legs[0].arrival}</p>
      <p className="text-sm">Flight Duration: {iterinaryData.itinerary.legs[0].durationInMinutes}</p>
    </div>

    <div className="mt-6 flex justify-around text-white">
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">{iterinaryData.itinerary.legs[0].segments[0].marketingCarrier.name}</p>
        <p className="text-sm">Airline</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold text-white">{iterinaryData.itinerary.legs[0].segments[0].flightNumber}</p>
        <p className="text-sm">Flight No.</p>
      </div>
    </div>
  </div>
)}


        </>
    );
}

export default Booking;
