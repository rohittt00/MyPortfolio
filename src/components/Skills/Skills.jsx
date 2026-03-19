import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={500}
            gyroscope={true}
            className="h-full"
          >
            {/* Card */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
            h-full min-h-[240px] flex flex-col">

              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3 mt-auto mb-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 border border-gray-700 
                    rounded-3xl py-2 px-3 min-w-[110px] 
                    hover:border-[#8245ec] transition"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Skills;