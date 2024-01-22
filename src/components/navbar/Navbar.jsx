import React from 'react';
import { FaSearch } from 'react-icons/fa';
import "./Navbar.css";
import { TfiSearch } from "react-icons/tfi";
import { BsSend } from "react-icons/bs";
import DynamicButton from '../dynamicbutton/DynamicButton';
import { Avatar } from '@mui/material';
import User from '../user/User'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="input-container">
        <TfiSearch size={30} className="search-icon" />
        <input type="text" placeholder="Search a transaction..." className="transparent-input" />
      </div>
      <div className="navbar-container">
      <DynamicButton icon={<BsSend />} text="Pay"  />
      <div className='user-details'>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <User/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
