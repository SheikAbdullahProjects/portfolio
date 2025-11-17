import React from "react";

const Project = ({ image, title, description, tags, link }) => {
  return (
    <div className="p-4 rounded-lg bg-[#F9FAFB] min-w-[300px] max-w-[400px] shadow-md flex flex-col justify-between">
      <img
        src={image}
        alt=""
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <div>
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="font-light text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap items-center mt-4 gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[#1F2937] text-white inline-block rounded-md px-2 py-1.5">
            {tag}
          </span>
        ))}
      </div>
      <button className="mt-4 bg-[#1F2937] text-white py-1.5 px-2 rounded-md" onClick={() => window.open(link, "_blank")}>Learn More</button>
    </div>
  );
};

export default Project;
