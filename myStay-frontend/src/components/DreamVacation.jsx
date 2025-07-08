import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image1 from "../assets/Post/hotel1.png";
import Image2 from "../assets/Post/hotel2.png";
import Image3 from "../assets/Post/hotel3.png";
import Image4 from "../assets/Post/hotel4.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DreamVacation = () => {
  const [category, setCategory] = useState([]);
  const navigation = useNavigate();
  console.log("Category", category);

  const getAllCategory = async () => {
    // {console.log("this is the dream vacation")}
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/category/get-category`
      
      );
      setCategory(response.data.category);
      console.log("API Response:", response.data);
      console.log(`response catagory 123 ${category}`)
      console.log("Category", category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Images to associate with categories (you can adjust the logic to dynamically assign images based on category)
  const categoryImages = [
    { name: "Hyderabad", image: Image1 },
    { name: "Vijayawada", image: Image2 },
    { name: "Chennai", image: Image3 },
    { name: "Bengaluru", image: Image4 },
  ];

  // Function to find the image for a category
  const getImageForCategory = (categoryName) => {
    const categoryImage = categoryImages.find(
      (item) => item.name === categoryName
    );
    return categoryImage ? categoryImage.image : null;
  };

  return (
    <div className="flex flex-col mt-14 px-4 mx-auto max-w-screen-xl sm:ml-[175px]">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-center sm:text-left sm:ml-0">
        Stay Where Comfort Meets Convenience
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-10 max-w-xl text-center sm:text-left sm:ml-0">
        From weekend getaways to business trips, we help you find the right place with real reviews, and smooth booking.Find hotels that feel like home from budget-friendly rooms to luxury.
      </p>

      {/* Destinations */}
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {console.log("this is the dreamvacation page and length is ",category.length)}
        {category.length===0 && (<div>
          <h1 className="font-bold text-5xl">"You are Offline or DisConnected with server"</h1>
        </div> )}

        {category?.map((destination, index) => {
          const categoryImage = getImageForCategory(destination.name);
          return (
            <div key={index} className="text-center w-full sm:w-[18rem] hover:cursor-pointer" onClick={() => navigation(`/category/${destination.slug}` )}>
              {console.log("slugs of destiny post are ",destination.slug)}
              {categoryImage && (
                <img
                  src={categoryImage}
                  alt={destination.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2
                className="text-lg font-semibold mt-2 cursor-pointer"
                onClick={() => navigation(`/category/${destination.slug}`)}
              >
                {destination.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DreamVacation;
