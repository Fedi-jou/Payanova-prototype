import React, { useState } from 'react';
import './User.css'; // Make sure to create a corresponding CSS file

const UserButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="user-button">
        <div className='user-display'>
    <span className="username">JohnDoe</span>
    <span className="owner">Owner</span>
        </div>
    
      <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
        <button onClick={toggleDropdown}>▼</button>
        <div className="dropdown-content">
          <a href="#">Disconnect</a>
        </div>
      </div>
    </div>
  );
};

export default UserButton;
