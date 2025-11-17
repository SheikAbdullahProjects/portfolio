import React from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center p-6 px-4 py-6 sm:px-8 md:px-12 lg:px-16"
      style={{ backgroundImage: `url(${assets.main_bg})` }}
      id="home"
    >
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default Hero;
