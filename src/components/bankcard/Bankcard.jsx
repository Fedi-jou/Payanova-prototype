import React from 'react';

const BankCard = ({ cardNumber, cardHolder, expirationDate }) => {
  return (
    <div className="bank-card">
      <div className="card-header">
        <div className="card-logo">Your Bank Logo</div>
      </div>
      <div className="card-body">
        <div className="card-number">{cardNumber}</div>
        <div className="card-expiration">{expirationDate}</div>
      </div>
      <div className="card-footer">
        <div className="card-holder">{cardHolder}</div>
      </div>
    </div>
  );
};

export default BankCard;
