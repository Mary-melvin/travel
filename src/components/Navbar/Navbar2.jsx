import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="navbar flex w-full justify-between items-center h-20 px-4 relative text-white">
      <div className="logo">
      <Link to="/"><img
          className="logo"
          src={MyLogo}
          alt="Mary Travel"
        /></Link>
      </div>
      <ul className="hidden md:flex ">
        <li className="cursor-pointer"><Link to="/">Home</Link></li>
        <li className="cursor-pointer"><Link to="/about">About Us</Link></li>
        <li className="cursor-pointer"><Link to="/travel">Travel</Link></li>
        <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2 cursor-pointer" size={20} />
        <BsPerson size={20} className="cursor-pointer" />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black cursor-pointer" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b cursor-pointer"><Link to="/index">Home</Link></li>
          <li className="border-b cursor-pointer"><Link to="/visit">Destinations</Link></li>
          <li className="border-b cursor-pointer"><Link to="/travel">Travel</Link></li>
          <li className="border-b cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex justify-between my-6">
          <FaFacebook className="icon cursor-pointer" />
          <FaTwitter className="icon cursor-pointer" />
          <FaYoutube className="icon cursor-pointer" />
          <FaPinterest className="icon cursor-pointer" />
          <FaInstagram className="icon cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
