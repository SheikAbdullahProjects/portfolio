import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mt-6 py-6 px-4 sm:px-8 md:px-12 lg:px-16" id="about">
    <h2 className="text-center text-4xl font-bold mb-5">About Me <hr className="w-15 mx-auto" /></h2>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
      <img src={assets.about} alt="About" className="min-w-1/2" />
      <p className="sm:max-w-1/2 text-md sm:text-lg ">
       I'm a Full Stack Web Developer and GenAI Engineer with hands-on experience building and deploying scalable web applications, including Retrieval-Augmented Generation (RAG) systems. My expertise spans front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Express, FastAPI, and databases like MySQL and PostgreSQL. I've built responsive user interfaces, developed secure REST APIs, and worked on LLM-powered backends using LangChain and the Groq API. Through internship and freelance project work, I've collaborated in agile workflows, used Git for version control, and deployed applications on cloud platforms like Render. I'm passionate about writing clean, maintainable code and continuously learning new technologies — from web development to applied Generative AI.
      </p>
    </div>
    </div>
  );
};

export default About;
