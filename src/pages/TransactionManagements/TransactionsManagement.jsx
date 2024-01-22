import React from 'react';
import TransactionTable from "../../components/transactiontable/TransactionTable"
import  HeaderWithSubtext from '../../components/header/Header';
const EmptyComponent = () => {
  return (
    <div> 
      <div style={{ marginLeft: '40px' }}>
      <HeaderWithSubtext text="Transactions Managements"  />
      </div>
     
   <TransactionTable/>
    </div>
  );
};

export default EmptyComponent;
