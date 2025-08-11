import React from "react";
import { assets } from "../assets/assets.js";
const NavBar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%]  justify-between ">
      <img className="w-[max(9%,50px)]" src={assets.logoa} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full hover:text-white transition-all duration-300  "
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
