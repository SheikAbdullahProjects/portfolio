import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 px-6 sm:px-12 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT - Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Sheik Abdullah</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Full Stack Developer specializing in React, Node.js & MySQL.
            I create modern, high-performing, responsive web applications.
          </p>
        </div>

        {/* MIDDLE - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex sm:flex-col gap-2 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition cursor-pointer">Home</a>
            <a href="#about" className="hover:text-white transition cursor-pointer">About</a>
            <a href="#projects" className="hover:text-white transition cursor-pointer">Projects</a>
            <a href="#skills" className="hover:text-white transition cursor-pointer">Skills</a>
            <a href="#contact" className="hover:text-white transition cursor-pointer">Contact</a>
          </ul>
        </div>

        {/* RIGHT - Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
          <div className="flex items-center gap-6 mt-2">
            <a href="https://www.instagram.com/_.mr._maverick/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sheik-abdullah-678401273/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/SheikAbdullahProjects" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:sheikabdullah.web@gmail.com"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sheik Abdullah — All Rights Reserved.
      </div>
    </footer>
  );
}
