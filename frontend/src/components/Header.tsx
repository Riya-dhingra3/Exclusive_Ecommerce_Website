import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaShoppingCart, FaBars } from "react-icons/fa";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="w-[100%]">
      {/* 🔹 Top Bar */}
      <div className="fixed top-0 left-0 w-full flex flex-wrap justify-evenly items-center bg-black text-white h-8 md:h-10 px-4 z-50">
        <p className="text-xs md:text-sm text-center w-full md:w-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span>
            <a href="/" className="font-bold underline">ShopNow</a>
          </span>
        </p>

        {/* 🔹 Language Selector */}
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <Select
              id="language-select"
              onChange={handleChange}
              value={language}
              sx={{
                color: "white",
                backgroundColor: "black",
                ".MuiSvgIcon-root": { color: "white" },
                height: "28px",
                fontSize: "12px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& fieldset": { border: "none" },
              }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* 🔹 Main Header */}
      <div className="flex justify-between items-center md:py-6 mt-8 lg:container container mx-auto">
        {/* 🔹 Logo */}
        <div className="font-bold text-lg md:text-xl">
          <a href="/">Exclusive</a>
        </div>

        {/* 🔹 Desktop Navigation with Active Underline */}
        <div className="hidden md:flex gap-6 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pb-1 ${isActive ? "border-b-2 border-gray-500" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `pb-1 ${isActive ? "border-b-2 border-gray-500" : ""}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `pb-1 ${isActive ? "border-b-2 border-gray-500" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `pb-1 ${isActive ? "border-b-2 border-gray-500" : ""}`
            }
          >
            Sign Up
          </NavLink>
        </div>

        {/* 🔹 Search & Icons */}
        <div className="flex gap-3 items-center">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              className="bg-gray-200 px-3 py-1 pr-8 rounded-md text-black text-sm w-32 md:w-48"
              type="text"
              placeholder="Search"
            />
            <CiSearch className="absolute right-2 text-black text-lg" />
          </div>

          {/* Wishlist & Cart Icons */}
          <a href="/wishlist" className="text-xl">
            <FaRegHeart />
          </a>
          <a href="/cart" className="text-xl">
            <FaShoppingCart />
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black text-white py-4 gap-2 w-full">
          <NavLink
            to="/"
            className={({ isActive }) => `py-1 ${isActive ? "border-b-2 border-gray-500" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `py-1 ${isActive ? "border-b-2 border-gray-500" : ""}`}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `py-1 ${isActive ? "border-b-2 border-gray-500" : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => `py-1 ${isActive ? "border-b-2 border-gray-500" : ""}`}
          >
            Sign Up
          </NavLink>
        </div>
      )}

      {/* 🔹 Full-Width Line */}
      <div className="w-[100%] border-t border-gray-400"></div>
    </div>
  );
};

export default Header;
