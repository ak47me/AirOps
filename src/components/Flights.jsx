import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "../styles";
import { redirect, useNavigate } from "react-router-dom";
import { format } from 'date-fns';

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

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`${styles.padding} relative z-0 max-w-7xl mx-auto`}
        >
            <h1>Flight Search</h1>

            <div className="sm:col-span-5 my-4">
                <label className="block text-sm font-medium leading-6 text-white-900">
                    From
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="from"
                            id="from"
                            className="block flex-1 border-0 bg-transparent py-2 pl-2 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="BOM"
                            value={form.from}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="sm:col-span-4 my-4">
                <label className="block text-sm font-medium leading-6 text-white-900">
                    To
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="to"
                            id="to"
                            className="block flex-1 border-0 bg-transparent py-2 pl-2 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="DEL"
                            value={form.to}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="relative max-w-sm my-4">
                <label className="block text-sm font-medium leading-6 text-white-900">
                    Departure Date
                </label>
                <div className="mt-2">
                    <DatePicker
                        selected={form.startDate}
                        onChange={(date) => handleDateChange("startDate", format(date, 'yyyy-MM-dd'))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholderText="Select date"
                    />
                </div>
            </div>
            <div className="relative max-w-sm my-4">
                <label className="block text-sm font-medium leading-6 text-white-900">
                    Arrival Date (optional)
                </label>
                <div className="mt-2">
                    <DatePicker
                        selected={form.endDate}
                        onChange={(date) => handleDateChange("endDate", format(date, 'yyyy-MM-dd'))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholderText="Select date"
                    />
                </div>
            </div>
            <div className="relative max-w-sm my-4">
                <label className="block text-sm font-medium leading-6 text-white-900">
                    Flight Class
                </label>
                <div className="mt-2">
                    <select
                        id="classType"
                        name="classType"
                        value={form.classType}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                    </select>
                </div>
            </div>
            <div className="relative max-w-sm my-4">
                <label className="block text-sm font-medium leading-6 text-white-900">
                    Itinerary Type
                </label>
                <div className="mt-2">
                    <select
                        id="iterinary"
                        name="iterinary"
                        value={form.iterinary}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        <option value="ONE_WAY">One Way</option>
                        <option value="ROUND_TRIP">Round Trip</option>
                    </select>
                </div>
            </div>
            <div className="sm:col-span-4 my-4">
                <label className="block text-sm font-medium leading-6 text-white-900">
                    No. of Adults
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-[5rem]">
                        <input
                            type="number"
                            name="adults"
                            id="adults"
                            className="block flex-1 border-0 bg-transparent py-2 pl-2 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="1"
                            value={form.adults}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <label className="block text-sm font-medium leading-6 text-white-900 mt-2">
                    No. of Children (2-18 years) 
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-[5rem]">
                        <input
                            type="number"
                            name="children"
                            id="children"
                            className="block flex-1 border-0 bg-transparent py-2 pl-2 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="0"
                            value={form.children}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <label className="block text-sm font-medium leading-6 text-white-900 mt-2">
                    Currency Code
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-[5rem]">
                        <input
                            type="text"
                            name="currency"
                            id="currency"
                            className="block flex-1 border-0 bg-transparent py-2 pl-2 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="USD"
                            value={form.currency}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-start gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 sm:max-w-xs px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Flights;
