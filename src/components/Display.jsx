import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import result from './template';

const Display = () => {
    // const data = result(); 
    // console.log(data); 
    const navigate = useNavigate();
    const handleBooking = (itinerary) => {
        if (itinerary) {
            navigate(`/booking`, { state: { itinerary } });
        } else {
            console.error("Itinerary is undefined");
        }
    };
    const location = useLocation();
    const formData = location.state;
    const [result, setResult] = useState(null);

    useEffect(() => {

        if (!formData) {
            console.error('Form data is not available');
            return;
        }

        const fetchData = async () => {
            const {
                from,
                to,
                startDate,
                endDate,
                classType,
                itinerary, // Fixed typo here
                adults,
                children,
                currency,
            } = formData;

            const url = `https://sky-scanner3.p.rapidapi.com/flights/search-one-way?fromEntityId=${from}&toEntityId=${to}&departDate=${startDate}&currency=${currency}&children=${children}&cabinClass=${classType}&adults=${adults}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '73e751e281msh2132476d0ddf4c1p1789d8jsnab7beb23f099',
                    'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Data fetched successfully:', data);
                    setResult(data);
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [formData]); // Added formData as a dependency
    console.log("results is : ", result);
    return (
        <div className="space-y-4 p-4 ring-1 ring-inset ring-gray-500 mt-2 max-w-lg ml-2 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-dark rounded-lg">
            {result?.data?.itineraries?.slice(0, 3).map((itinerary, index) => ( // change first data to result only
                <div key={index} className="p-4 bg-dark-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Flight {index + 1}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <p className="text-sm text-violet-400">Origin</p>
                            <p className="text-lg font-semibold">{itinerary.legs[0].origin.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-violet-500">Destination</p>
                            <p className="text-lg font-semibold">{itinerary.legs[0].destination.name}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <p className="text-sm text-red-600">Carrier</p>
                            <p className="text-lg font-semibold">{itinerary.legs[0].carriers.marketing[0].name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-green-600">Minutes</p>
                            <p className="text-lg font-semibold">{itinerary.legs[0].durationInMinutes}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <p className="text-sm text-green-600">Price</p>
                            <p className="text-lg font-semibold">{itinerary.price.formatted}</p>
                        </div>
                    </div>
                    <div className="flex justify-right">
                        <button
                            onClick={() => handleBooking(itinerary)}
                            className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600'
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Display;