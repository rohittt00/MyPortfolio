import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile1.png";

function About() {
  const roles = [
    "Fullstack Developer",
    "Android Developer",
    "React Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-10 px-[7vw] md:px-[7vw] lg:px-[20vw] mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left">

          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Hi, I am
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-2 leading-tight">
            Rohit <br /> Sonavane
          </h2>

          {/* 🔥 Animated Role */}
          <h3 className="text-xl md:text-3xl font-semibold mt-4">
            <span className="text-white">I am a </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text transition duration-500">
              {roles[index]}
            </span>
          </h3>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I am a passionate full-stack developer skilled in MERN stack and
            modern technologies. I build scalable and user-friendly
            applications with clean UI and smooth performance.
          </p>

          {/* 🔥 Button */}
          <a
            href="/Rohit_Sonavane.pdf"
            download
            className="inline-block mt-6 px-8 py-3 rounded-full font-bold text-white 
            bg-gradient-to-r from-purple-600 to-pink-500 
            hover:scale-110 transition duration-300 shadow-lg shadow-purple-500/30"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>

            <img
              src={profileImage}
              alt="profile"
              className="w-48 h-48 md:w-[22rem] md:h-[22rem] rounded-full 
              border-4 border-purple-500 object-cover relative z-10 
              animate-float"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;