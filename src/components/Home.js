import React, { useEffect } from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  // useEffect(() => {
  //   const video = document.getElementById("heroVideo");

  //   if (video) {
  //     video.volume = 0.7; // ✅ Set volume (Adjust as needed)

  //     const playVideoWithSound = () => {
  //       video.muted = false; // 🔊 Unmute video
  //       video.play().catch((error) => console.error("Autoplay blocked:", error));
  //     };

  //     // Try playing automatically
  //     video.play().then(() => {
  //       video.muted = false;
  //     }).catch(() => {
  //       console.warn("Autoplay blocked, waiting for user interaction...");
  //       document.addEventListener("click", playVideoWithSound, { once: true });
  //     });
  //   }
  // }, []);

  const features = [
    { title: "Verified Listings", desc: "Only trusted properties." },
    { title: "Best Deals", desc: "Affordable pricing and offers." },
    { title: "Expert Assistance", desc: "Guidance from real estate experts." },
    { title: "Secure Transactions", desc: "Safe and verified payments." }
  ];

  return (
    <div className="w-full text-center relative">
      {/* Hero Section with Video Background */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        {/* <video 
          id="heroVideo"
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/Overview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
                {/* Image Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/assets/home_wallpaper.png')" }}
        ></div>


        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <Typical
              steps={[
                "Welcome to Horizon Estates", 2000,
                "Find Your Dream Home With Us", 2000
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </h1>

          {/* Animated Button */}
          <Link to="/properties">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
            >
              Browse Properties
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-10 w-full max-w-6xl pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;