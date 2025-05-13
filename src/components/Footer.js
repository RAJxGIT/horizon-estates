import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white/90 backdrop-blur-md shadow-md py-1 px-1 text-center text-black fixed bottom-0 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Logo & Title */}
        <div className="flex items-center justify-center w-full text-lg ">
          © 2025 Samraat Estates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
