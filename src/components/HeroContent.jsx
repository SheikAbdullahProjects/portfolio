import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const HeroContent = () => {
  return (
    <div className="md:max-w-1/2 pt-17 sm:pt-30">
      <h2 className="text-white font-light text-[22px] sm:text-[28px]">Hey, I'm</h2>
      <h1 className="text-white font-bold text-[40px] sm:text-[50px]">Sheik Abdullah</h1>
      <h3 className="text-white font-semibold text-[26px] sm:text-[32px]">
        And I'm a{" "}
        <span className="bg-gradient-to-r from-[#644790] to-[#EC1271] bg-clip-text text-transparent">
          Full Stack Web Developer
        </span>
      </h3>
      <p className="text-white text-[15px] sm:text-[16px] mb-6">
       I’m a passionate full stack developer experienced in building high-quality, scalable web applications. I specialize in React, TypeScript, Node.js, Express, FastAPI, REST APIs, and SQL/MySQL.
From crafting clean, responsive user interfaces to developing efficient backend systems, I love turning ideas into real, production-ready solutions.
      </p>
      <div className="flex gap-4 mb-6">
        <a href="https://www.instagram.com/_.mr._maverick/" target="_blank" rel="noopener noreferrer"><Instagram className="text-white w-7 h-7" /></a>

        <a href="https://www.linkedin.com/in/sheik-abdullah-678401273/" target="_blank" rel="noopener noreferrer"><Linkedin className="text-white w-7 h-7" /></a>

        <a href="https://github.com/SheikAbdullahProjects" target="_blank" rel="noopener noreferrer"><Github className="text-white w-7 h-7" /></a>
      </div>
      <a href="#contact" className="text-gray-900 font-semibold bg-gradient-to-b from-[#FEF6F6] to-[#989393] hover:text-white hover:bg-gradient-to-r hover:from-[#644790] hover:to-[#EC1271]  transition duration-300 rounded-3xl py-2 px-2.5 sm:py-2.5 sm:px-3">Get in Touch</a>
    </div>
  );
};

export default HeroContent;
