import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 px-6 md:px-10 flex items-center justify-between border-b border-slate-200 fixed bg-white/70 backdrop-blur-lg w-full z-10 shadow-md">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-2xl tracking-tight bg-gradient-to-r from-green-500 to-red-800 text-transparent bg-clip-text">
          <Link to={"/"}>Movie Mania</Link>
        </div>
        <button
          className="text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        className={`flex-col mr-8 md:flex-row md:flex items-center gap-5 mt-3 md:mt-0 w-full md:w-auto ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <Link
          className="hover:underline hover:text-green-600 mt-2 inline-block cursor-pointer"
          to="/"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:text-green-600 mt-2 inline-block cursor-pointer"
          to="/favourites"
          onClick={toggleMenu}
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
