import { set } from "date-fns";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ image, title, description, price, addToResult }) => (
  <div
    className="group relative block bg-black rounded-lg overflow-hidden shadow-lg"
    onClick={() => addToResult({ title, price })}
  >
    <img
      alt={title}
      src={image}
      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />
    <div className="relative p-4">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{title}</p>
      <div className="mt-32">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Food = () => {
  const [result, setResult] = useState([]);
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification("The food order is been placed successfully");
  };
  const addToResult = (item) => {
    setResult((prevResult) => [...prevResult, item]);
  };
  console.log("results is : ", result);
  const foodItems = [
    {
      image: "https://www.tasteofhome.com/wp-content/uploads/2022/03/KFC-Ultimate-BBQ-Chicken-Sandwich-Courtesy-Kentucky-Fried-Chicken-Resize-Crop-DH-TOH-Top-Fast-Food-Items-2023.jpg?fit=700%2C700",
      title: "CRISPY CHICKEN BURGER",
      description: "A crispy chicken patty topped with lettuce, tomato, and mayo served on a sesame seed bun.",
      price: 20
    },
    {
      image: "https://www.dosafactorymenu.com/blog-admin/images/indian-food-items-apt-for-everyone041641.jpeg",
      title: "VEG THALI",
      description: "A traditional Indian meal consisting of a selection of various dishes served on a platter.",
      price: 15
    },
    {
      image: "https://blog.travelkhana.com/tkblog/wp-content/uploads/sites/2/2023/02/A-to-Z-Food-1024x683.jpg",
      title: "VEG FRIED RICE",
      description: "A flavorful and aromatic rice dish made with assorted vegetables and spices.",
      price: 18
    },
    {
      image: "https://sandinmysuitcase.com/wp-content/uploads/2021/04/Tandoori-Chicken.jpg.webp",
      title: "CHICKEN TANDOORI",
      description: "A popular Indian dish made by marinating chicken in a blend of yogurt and spices, then roasting it in a tandoor oven.",
      price: 25
    },
    {
      image: "https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg",
      title: "PIZZA",
      description: "A classic Italian dish consisting of a round, flat base of dough topped with tomato sauce, cheese, and various toppings.",
      price: 19
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86X_FCr5NI8bsDoyoJ-JWvfgyo-5zdhnZFg&s",
      title: "BUTTER CHICKEN",
      description: "A rich and creamy Indian curry made with tender pieces of chicken cooked in a tomato-based sauce with butter and cream.",
      price: 22
    }
  ];

  const total = result.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <button
                type="button"
                onClick={handleBackClick}
                className="absolute top-4 left-4 bg-white text-indigo-900 py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
            >
                Back
        </button>
      <h1 className="text-center text-4xl font-bold mt-10">Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mx-auto max-w-7xl">
        {foodItems.map((item, index) => (
          <FoodCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            addToResult={addToResult}
          />
        ))}
      </div>
      <div className="mt-12 p-6 bg-gray-800 rounded-lg shadow-lg mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">Selected Items</h2>
        <ul className="list-disc pl-6 space-y-2">
          {result.map((item, index) => (
            <li key={index} className="text-lg">
              {item.title} - <span className="font-semibold">${item.price}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl font-semibold mt-6">Total: <span className="text-indigo-400">${total}</span></p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-400 font-bold rounded-lg text-lg px-6 py-3 transition duration-300"
        >
          Submit
        </button>
        {notification && (
          <div className="mt-6 text-center bg-green-500 text-white py-2 rounded">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Food;