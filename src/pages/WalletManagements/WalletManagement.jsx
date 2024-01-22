import React from 'react';
import ChartPie from '../../components/chartpie/Chartpie';
import keys from "../../assets/images/chartpiekeys.png";
import Card from '../../components/card/card';
import HeaderWithSubtext from '../../components/header/Header';
import TransactionHistory from "../../components/transactionhistory/TransactionHistory"
import SelectionTitle from "../../components/selectionTitle/SelectionTitle"
import img1 from "../../assets/images/increase.png"
import img2 from "../../assets/images/decrease.png"
import "./WalletManagement.css"

const WalletManagement = () => {
  return (
    <div>
      <HeaderWithSubtext text="Wallet Management"  />
     
     
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
      <div className='walletmanagement-content'>
      <div className='walletmanagement-column1'>
    
      <div className='chart-header'>
        <p style={{ fontSize: '25px' }}><strong>Transaction History</strong></p>
        <SelectionTitle/>
        </div>
      <TransactionHistory/>
      </div>
        <div className='walletmanagement-column2'>
        <ChartPie/>
        <img src= {keys} alt=""  style={{
          width: '336px',
          height: '122px',
          marginTop : "60px",
          objectFit: 'cover',  // Adjust objectFit property based on your requirement
          borderRadius: '8px', // Add border-radius if you want rounded corners
        }}        />
        </div>
       
      </div>
    </div>
  );
};

export default WalletManagement;
