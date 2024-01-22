import React from 'react';
import "./header.css"

const HeaderWithSubtext = ({ text, subtext }) => {
  return (
    <div className='container-text'>
      <p className='main-text'>{text}</p>
      <p className='sub-text'>{subtext}</p>
    </div>
  );
};

export default HeaderWithSubtext;
