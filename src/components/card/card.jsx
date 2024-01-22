import React from 'react';
import './Card.css';

const Card = ({ image, text, number }) => {
  return (
    <div className='card'>
    <div className="card-content">
      <img src={image} alt="Avatar" className="card-image" />
      <div className="card-text">
        <p>{text}</p>
        <div className="card-number">{number}</div>
      </div>
      
    </div>
    </div>
  );
};

export default Card;
