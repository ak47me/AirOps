import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../styles";
import { redirect, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import Navbar from "./Navbar";

const Flights = () => {
    const [form, setForm] = useState({
        from: "",
        to: "",
        startDate: null,
        endDate: null,
        classType: "economy",
        iterinary: "ONE_WAY",
        adults: "1",
        children: "0",
        currency: "USD",
    });
    const formRef = useRef(null);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDateChange = (name, date) => {
        setForm((prev) => ({
            ...prev,
            [name]: date,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form); // Form data to be submitted
        navigate("/display-flights", { state: form });
        formRef.current.reset();
    };
    const handleBackClick = () => {
        navigate("/");
    };

    return (
        
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative z-0 max-w-7xl mx-auto p-8 bg-gradient-to-r from-indigo-900 to-blue-800 rounded-lg shadow-lg"
    >   
        <button
                type="button"
                onClick={handleBackClick}
                className="absolute top-4 left-4 bg-white text-indigo-900 py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
            >
                Back
        </button>
        <h1 className="mt-8 text-3xl font-extrabold text-white text-center">Flight Search</h1>

        <div className="sm:col-span-5 my-6">
            <label className="block text-sm font-medium text-white">
                From
            </label>
            <div className="mt-2 max-w-[370px]">
                <div className="flex rounded-md shadow-sm ring-2 ring-gray-400 focus-within:ring-2 focus-within:ring-indigo-500">
                    <input
                        type="text"
                        name="from"
                        id="from"
                        className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="BOM"
                        value={form.from}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>

        <div className="sm:col-span-5 my-6">
            <label className="block text-sm font-medium text-white">
                To
            </label>
            <div className="mt-2 max-w-[370px]">
                <div className="flex rounded-md shadow-sm ring-2 ring-gray-400 focus-within:ring-2 focus-within:ring-indigo-500">
                    <input
                        type="text"
                        name="to"
                        id="to"
                        className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="DEL"
                        value={form.to}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>

        <div className="relative max-w-sm my-6">
            <label className="block text-sm font-medium text-white">
                Departure Date
            </label>
            <div className="mt-2">
                <DatePicker
                    selected={form.startDate}
                    onChange={(date) => handleDateChange("startDate", format(date, 'yyyy-MM-dd'))}
                    className="bg-transparent border border-gray-600 text-white text-sm rounded-md focus:ring-indigo-500 block w-full p-2.5"
                    placeholderText="Select date"
                />
            </div>
        </div>

        <div className="relative max-w-sm my-6">
            <label className="block text-sm font-medium text-white">
                Arrival Date (optional)
            </label>
            <div className="mt-2">
                <DatePicker
                    selected={form.endDate}
                    onChange={(date) => handleDateChange("endDate", format(date, 'yyyy-MM-dd'))}
                    className="bg-transparent border border-gray-600 text-white text-sm rounded-md focus:ring-indigo-500 block w-full p-2.5"
                    placeholderText="Select date"
                />
            </div>
        </div>

        <div className="relative max-w-sm my-6">
            <label className="block text-sm font-medium text-white">
                Flight Class
            </label>
            <div className="mt-2">
                <select
                    id="classType"
                    name="classType"
                    value={form.classType}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-800 shadow-sm ring-2 ring-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                </select>
            </div>
        </div>

        <div className="relative max-w-sm my-6">
            <label className="block text-sm font-medium text-white">
                Itinerary Type
            </label>
            <div className="mt-2">
                <select
                    id="iterinary"
                    name="iterinary"
                    value={form.iterinary}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-800 shadow-sm ring-2 ring-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="ONE_WAY">One Way</option>
                    <option value="ROUND_TRIP">Round Trip</option>
                </select>
            </div>
        </div>

        <div className="sm:col-span-4 my-6">
            <label className="block text-sm font-medium text-white">
                No. of Adults
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-2 ring-gray-400 focus-within:ring-2 focus-within:ring-indigo-500 sm:max-w-[6rem]">
                    <input
                        type="number"
                        name="adults"
                        id="adults"
                        className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="1"
                        value={form.adults}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label className="block text-sm font-medium text-white mt-6">
                No. of Children (2-18 years)
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-2 ring-gray-400 focus-within:ring-2 focus-within:ring-indigo-500 sm:max-w-[6rem]">
                    <input
                        type="number"
                        name="children"
                        id="children"
                        className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="0"
                        value={form.children}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label className="block text-sm font-medium text-white mt-6">
                Currency Code
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-2 ring-gray-400 focus-within:ring-2 focus-within:ring-indigo-500 sm:max-w-[6rem]">
                    <input
                        type="text"
                        name="currency"
                        id="currency"
                        className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="USD"
                        value={form.currency}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>

        <div className="mt-8 flex items-center justify-start">
            <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
                Submit
            </button>
        </div>
    </form>
    );
}

export default Flights;
