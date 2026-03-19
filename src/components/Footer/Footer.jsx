import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">
          Sonavane Rohit
        </h2>

        {/* ✅ FIXED NAV LINKS */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" }, // ✅ IMPORTANT FIX
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
  {[
    { icon: <FaFacebook />},
    { icon: <FaTwitter />, },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rohit-sonavane-075a35372/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/_rohitt_.mali/" },
    // YouTube bhi add kar sakte ho 👇
    
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank" // ✅ new tab open
      rel="noopener noreferrer"
      className="text-xl hover:text-purple-500 transition transform hover:scale-110"
    >
      {item.icon}
    </a>
  ))}
</div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sonavane Rohit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;