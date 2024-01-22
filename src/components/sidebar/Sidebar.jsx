

import React from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { CiCreditCard1 } from 'react-icons/ci';
import { MdOutlineCurrencyExchange } from 'react-icons/md';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsWallet2 } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiLogout } from 'react-icons/ci';
import { RiContactsLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';
import logo from '../../assets/logos/v11.png';
import logo1 from '../../assets/logos/v12.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <NavLink to="/" className="logo">
          <img src={logo} alt="payanova logo" />
        </NavLink>
        <div className="manage-section">
          MANAGE
          <div className="sidebar-item">
          <NavLink exact to="/" activeClassName="active">
              <BiSolidDashboard />
              Dashboard
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/mycards" activeClassName="active">
              <CiCreditCard1 />
              My Cards
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/transactions" activeClassName="active">
              <MdOutlineCurrencyExchange />
              Transactions
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/transaction-pro" activeClassName="active">
              <MdOutlineChangeCircle />
              TransactPro
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/walletmanagement" activeClassName="active">
              <BsWallet2 />
              Wallet Manager
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/notification" activeClassName="active">
              <IoNotificationsOutline />
              Notification
            </NavLink>
          </div>
        </div>
        <div className="preferences-section">
          PREFERENCES
          <div className="sidebar-item">
            <NavLink to="/contacts" activeClassName="active">
              <RiContactsLine />
              Contacts
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/settings" activeClassName="active">
              <IoSettingsOutline />
              Settings
            </NavLink>
          </div>
        </div>
        <div className="logout-section">
          <div className="sidebar-item">
            <NavLink to="/logout" activeClassName="active">
              <CiLogout />
              Logout
            </NavLink>
          </div>
        </div>
        <img className="logo1" src={logo1} alt="payanova logo" />
      </div>
    </div>
  );
};

export default Sidebar;
