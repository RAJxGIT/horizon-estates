import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const PropertyDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const property = state?.property;

  if (!property) {
    navigate("/properties");
    return null;
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-left pt-28 w-[90%]">
      {/* Property Title with Motion */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {property.description}
      </motion.h1>

      {/* Image Carousel */}
      <div className="relative w-full h-[500px] flex items-center">
        <motion.button
          className="absolute left-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
          onClick={prevImage}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronLeft size={32} />
        </motion.button>

        {/* Main Image with Click to Open Fullscreen */}
        <motion.img
          key={selectedIndex}
          src={property.images[selectedIndex]}
          alt="Property"
          className="w-full h-[500px] object-cover rounded-md cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsFullscreen(true)} // Open full screen on click
        />

        <motion.button
          className="absolute right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronRight size={32} />
        </motion.button>
      </div>

      {/* Full-Screen Image Preview */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white bg-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-700"
            onClick={() => setIsFullscreen(false)}
          >
            <X size={28} />
          </button>

          <motion.button
            className="absolute left-6 text-white bg-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-700"
            onClick={prevImage}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronLeft size={40} />
          </motion.button>

          <motion.img
            key={selectedIndex}
            src={property.images[selectedIndex]}
            alt="Fullscreen Property"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.button
            className="absolute right-6 text-white bg-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-700"
            onClick={nextImage}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight size={40} />
          </motion.button>
        </div>
      )}

      {/* About Property Section */}
      <motion.div
  className="mt-8"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl font-semibold text-gray-900">About Property</h2>
  <p className="text-gray-700 mt-2 text-lg leading-relaxed">
    <strong>Location:</strong> Sarojini Nagar, Banthra, Lucknow, Uttar Pradesh, India
    <br /><br />
    Situated in the rapidly developing area of <strong>Banthra, Lucknow</strong>, this prime land offers an excellent opportunity for 
    residential, commercial, or investment purposes. With easy access to major roads, markets, and essential facilities, this location 
    is perfect for building your dream home or a profitable real estate project.
    <br /><br />
    <strong>Property Highlights:</strong>
    <ul className="list-disc list-inside mt-2">
      <li><strong>Land Type:</strong> Residential/Commercial Plot</li>
      <li><strong>Location Advantage:</strong> Well-connected to major highways and city centers</li>
      <li><strong>Ideal For:</strong> Housing projects, farmhouses, or investment purposes</li>
      <li><strong>Nearby Amenities:</strong> Schools, hospitals, markets, and transportation hubs</li>
      <li><strong>Legal Status:</strong> Clear title, ready for registration</li>
    </ul>
    <br />
    Contact us today for site visits and more details!
  </p>
</motion.div>
    </div>
  );
};

export default PropertyDetails;