import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Navbar = () => {
  const handleHireMeCLick = () => {
    console.log("hi");
  };
  return (
    <div className="w-screen h-24 bg-transparent flex justify-around items-center  absolute z-10">
      <h3 className="text-white">
        {" "}
        <span className="text-primary">My</span>Portfolio{" "}
      </h3>

      <ul className="text-white  gap-10 font-semibold text-xl hidden sm:flex">
        <li className="hover:text-red-400 transition-all duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-red-400 transition-all duration-300 cursor-pointer">
          Skills
        </li>
        <li className="hover:text-red-400 transition-all duration-300 cursor-pointer">
          About
        </li>
        <li className="hover:text-red-400 transition-all duration-300 cursor-pointer">
          Contact
        </li>
      </ul>

      {/* <HoverBorderGradient onClick={handleHireMeCLick} children={"Hire me"} /> */}

      <button className="hover:bg-cyan-600 border-2 border-cyan-600 rounded text-white px-6 py-2 text-xl ">
        {" "}
        Hire me
      </button>
    </div>
  );
};

export default Navbar;
