import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 px-3 py-3 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Logo & Title */}
        <div className="flex items-center font-bold italic text-3xl space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto" />
          <span className="text-2xl tracking-wide">HORIZON ESTATES</span>
        </div>

        {/* Right Section - Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {[
              { path: "/", label: "HOME" },
              { path: "/properties", label: "PROPERTIES" },
              { path: "/about", label: "ABOUT US" },
              { path: "/contact", label: "CONTACT" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="px-4 py-2 text-lg font-medium rounded-md transition hover:bg-black hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;