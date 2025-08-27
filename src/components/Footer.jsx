import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      © {new Date().getFullYear()} My Website
    </footer>
  );
};

export default Footer;
