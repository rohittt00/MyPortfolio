import React from "react";
import { education } from "../../constants";

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4">
          My academic journey 🚀
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* ✅ Responsive Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-purple-500 h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-12 flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* ✅ Circle */}
            <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white"></div>

            {/* ✅ Card */}
            <div
              className={`bg-[#0d081f] border border-gray-700 p-6 rounded-xl shadow-lg 
              w-full ml-12 md:ml-0 md:w-[45%] ${
                index % 2 === 0
                  ? "md:mr-auto md:pr-8"
                  : "md:ml-auto md:pl-8"
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-14 h-14 rounded object-cover bg-white"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-2 text-gray-400 text-sm">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;