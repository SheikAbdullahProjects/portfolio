import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mt-6 py-6 px-4 sm:px-8 md:px-12 lg:px-16" id="about">
    <h2 className="text-center text-3xl mb-5">About Me <hr className="w-15 mx-auto" /></h2>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
      <img src={assets.about} alt="About" className="min-w-1/2" />
      <p className="sm:max-w-1/2 text-md sm:text-lg ">
        I am a Full Stack Web Developer with 3 years of hands on experience in
        building and deploying scalable web applications. My expertise spans
        both front-end and back-end technologies, including HTML, CSS,
        JavaScript, React, Node.js, Express, and databases like SQL. I have
        worked on developing responsive user interfaces, optimizing performance,
        and implementing secure server-side logic to deliver seamless digital
        experiences. <br /> <br /> Over the years, I've collaborated with
        cross-functional teams, followed agile workflows, and deployed projects
        using cloud platforms like AWS and modern version control practices with
        Git. I am passionate about crafting clean, maintainable code and
        continuously learning new technologies to stay ahead in the
        ever-evolving web development landscape.
      </p>
    </div>
    </div>
  );
};

export default About;
