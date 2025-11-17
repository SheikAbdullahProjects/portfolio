import React from "react";

const Skill = ({skills, name, color, icon, text}) => {
  

  return (
    <div className="w-[350px] md:w-[400px] bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      
      {/* Top Icon */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-md mb-4`} style={{ backgroundColor: `${color}20`, color: color }}>
        <span className="text-xl">{icon}</span>
      </div>

      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-6">
        {text}
      </p>

      {/* Skills */}
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 font-medium">{skill.name}</span>
              <span className="text-gray-800 font-semibold">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full relative overflow-hidden">
              <div
                className={`h-full rounded-full transition-all`}
                style={{ width: `${skill.level}%`, backgroundColor: color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
