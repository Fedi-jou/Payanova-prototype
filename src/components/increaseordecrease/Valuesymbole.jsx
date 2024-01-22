import React from 'react';
import './ValueSymbole.css'; // Make sure to create a corresponding CSS file

const ValueChangeIcon = ({ increased }) => {
  return (
    <div className={`value-change-icon ${increased ? 'increased' : 'decreased'}`}>
      <svg
        viewBox="0 0 24 24"
        width="48"
        height="48"
        xmlns="http://www.w3.org/2000/svg"
        fill={increased ? '#1C1BA5' : '#FF0000'} // Set your desired colors
        className="icon"
      >
        {increased ? (
          <path d="M12 2L2 12h4v8h12v-8h4L12 2zm0 15l-4.5-4.5 1.41-1.41L12 13.17l3.09-3.09 1.41 1.41L12 17z" />
        ) : (
          <path d="M12 22L22 12h-4V4H10v8H6l6 6zm0-15l4.5 4.5-1.41 1.41L12 10.83l-3.09 3.09-1.41-1.41L12 7z" />
        )}
      </svg>
    </div>
  );
};

export default ValueChangeIcon;
