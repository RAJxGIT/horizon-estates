
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Properties = () => {
  const navigate = useNavigate();

  const properties = [
    { 
      id: 1,
      images: [
        "/assets/VermaSite/home_1.jpeg",
        "/assets/VermaSite/home_2.jpeg",
        "/assets/VermaSite/home_3.jpeg",
        "/assets/VermaSite/land_1.jpeg",
        "/assets/VermaSite/land_2.jpeg",
        "/assets/VermaSite/land_3.jpeg",
        "/assets/VermaSite/land_4.jpeg"
      ], 
      description: "Banthra Site", 
      location: "Sarojini Nagar Banthra, Lucknow - Uttar Pradesh, India",
      price: "₹75,00,000"
    },
   //add other properties
     { 
      id: 2,
      images: [
        "/assets/VermaSite/land_3.jpeg",
        "/assets/VermaSite/home_1.jpeg",
        "/assets/VermaSite/home_2.jpeg",
        "/assets/VermaSite/home_3.jpeg",
        "/assets/VermaSite/land_1.jpeg",
        "/assets/VermaSite/land_2.jpeg",
        "/assets/VermaSite/land_4.jpeg"
      ], 
      description: "Scooter-India Site", 
      location: "Scoooter India Chaurah, Lucknow - Uttar Pradesh, India",
      price: "₹65,00,000"
    },
  ];

  return (
    <div className="text-center px-6 pt-28 pb-6">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Properties
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <motion.div 
            key={property.id}
            className="shadow-lg rounded-lg overflow-hidden bg-white cursor-pointer relative"
            onClick={() => navigate(`/property/${property.id}`, { state: { property } })}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            
            <motion.img 
              src={property.images[0]} 
              alt="Property" 
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute top-2 right-2 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded-lg">
            {property.id === 2 ? "Coming Soon" : "Delivered"}
          </div>
            <div className="p-4">
              <p className="text-gray-1000 font-bold">{property.description}</p>
              <p className="text-gray-700 text-sm"><span className="font-bold">Location:</span> {property.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Properties;