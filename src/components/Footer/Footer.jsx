import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';
import MyLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
        <div className="logo">
        <img src={MyLogo} alt="Mary Travel" />
      </div>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon cursor-pointer" />
            <FaTwitter className="icon cursor-pointer" />
            <FaYoutube className="icon cursor-pointer" />
            <FaPinterest className="icon cursor-pointer" />
            <FaInstagram className="icon cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
          <li className="cursor-pointer"><Link to="/">Home</Link></li>
          <li className="cursor-pointer"><Link to="/about">About Us</Link></li>
          <li className="cursor-pointer"><Link to="/travel">Travel</Link></li>
          <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="text-right lg:flex">
            Copyright:2024 All Rights Reserved
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
