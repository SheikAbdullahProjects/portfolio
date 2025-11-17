import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
      <ul className="hidden md:flex items-center space-x-4 text-white font-light text-lg">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ul>
      <a
        href="/Resume.pdf"
        download
        className="hidden md:inline-block text-gray-900 font-semibold bg-gradient-to-b from-[#FEF6F6] to-[#989393] hover:text-white hover:bg-gradient-to-r hover:from-[#644790] hover:to-[#EC1271]  transition duration-300  rounded-3xl py-2 px-2.5 sm:py-2.5 sm:px-3"
      >
        Download CV
      </a>
      <Menu
        className="md:hidden text-white w-7 h-7 cursor-pointer"
        onClick={() => setVisible(!visible)}
      />
      <div
        className={`absolute top-0 right-0 w-full py-5 px-2 bg-gray-200 ${
          visible ? "block" : "hidden"
        }`}
      >
        <X
          onClick={() => setVisible(false)}
          className="w-7 h-7 absolute right-4 top-4 cursor-pointer"
        />
        <ul className=" flex flex-col space-y-3 text-xl text-center ">
          <a href="#home" onClick={() => setVisible(false)}>Home</a>
          <a href="#about" onClick={() => setVisible(false)}>About</a>
          <a href="#skills" onClick={() => setVisible(false)}>Skills</a>
          <a href="#projects" onClick={() => setVisible(false)}>Projects</a>
          <a href="#contact" onClick={() => setVisible(false)}>Contact</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
