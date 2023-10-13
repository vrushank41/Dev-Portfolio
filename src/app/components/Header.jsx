import React from "react";
import "../styles/Header.css"

const Header = () => {
  return (
    <header className="py-4">
    <div className="mx-5 sm:mx-auto px-4 flex items-center justify-between border border-zinc-500 rounded-full p-4 ">
      {/* Left part */}
      <div>
        <span className="text-xl font-extrabold cursor-pointer animated-gradient-text">Vrushank <span className="text-slate-400 font-bold">Gajula</span></span>
      </div>

      {/* Mid part */}
      <div className="hidden sm:flex font-semibold space-x-4">
        <p className="cursor-pointer text-white">About</p>
        <p className="cursor-pointer text-white">Skills</p>
        <p className="cursor-pointer text-white">Contact</p>
      </div>

      {/* Right part */}
      <div className="flex space-x-4">
        <button className="hidden md:inline-block rounded-full p-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">LinkedIn</button>
        <button className="md:inline-block rounded-full p-2 border border-gray-500 text-white cursor-pointer">GitHub</button>
      </div>
    </div>
    </header>
  );
};

export default Header;
