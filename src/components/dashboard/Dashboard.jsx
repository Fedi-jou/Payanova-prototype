

// Dashboard.jsx
import React from 'react';
import img1 from "../../assets/images/increase.png"
import img2 from "../../assets/images/decrease.png"
import bankcardimg from "../../assets/images/bankcard.png"
import HeaderWithSubtext from '../header/Header';
import Card from '../card/card';

import"./Dashboard.css";
import TransactionHistory from "../transactionhistory/TransactionHistory"
import LineChart from '../linechart/LineChart';
import AmountInput from '../amount/amount';
import Button  from '../button/Button';
import QuickTransField from '../quicktrans/quicktrans';
import Rounded from '../roundedavatar/rounded'
import BankCard from '../bankcard/Bankcard';
import Valuesymbole from "../increaseordecrease/Valuesymbole"
import SelectionTitle from "../selectionTitle/SelectionTitle"

const Dashboard = () => {
  const cardData = {
    cardNumber: '1234 5678 9012 3456',
    cardHolder: 'John Doe',
    expirationDate: '12/24',
  };
  return (
    <div className='Dashboard-container'>
  
    <HeaderWithSubtext text="Dashboard" subtext="track and manage customer information and activities" />
     
     
     <div className='dashboard-cards' >

     
    <Card
        image= {img1}
        text="Total Profit"
        number="2.360.00"
      />
       <Card
        image= {img1}
        text="Total Income"
        number= "6.169.00"
      />
       <Card
        image= {img2}
        text="Total Expences"
        number= "3.380.00"
      />
       <Card
        image= {img1}
        text="Total Friends"
        number="625"
      />
      </div>
     
      <div className='dashboard-visual'>     
      <div className="dashboard-content">
        <div className='chart-header'>
        <p style={{ fontSize: '25px' }}><strong>Activity</strong></p>
        <SelectionTitle/>
        </div>
     
      <LineChart/>
      <div className='chart-header'>
        <p style={{ fontSize: '25px' }}><strong>Transaction History</strong></p>
        <SelectionTitle/>
        </div>
      <TransactionHistory/>
    </div>
    <div className='dashboard-right'>
      <img src = {bankcardimg} alt ="" />
      <Rounded/>
      <QuickTransField/>
      <AmountInput/>
      <Button variant="contained" size="large" content="Send Money"/>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
