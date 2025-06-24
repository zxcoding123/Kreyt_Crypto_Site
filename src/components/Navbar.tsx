import React from "react";
import logo from "../assets/logo.png"; // adjust path if needed

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex flex-column gap-4">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <div className=" text-xl font-bold ">
              <h1>KREYT</h1>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className=" hover:text-blue-600">
              Home
            </a>
            <a href="#" className=" hover:text-blue-600">
              About
            </a>
            <a href="#" className=" hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex">
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
