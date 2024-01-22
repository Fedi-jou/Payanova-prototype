import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionsManagement from "./pages/TransactionManagements/TransactionsManagement";
import Contacts from "./pages/Contacts/Contacts";
import WalletManagement from './pages/WalletManagements/WalletManagement';
import PaymentManagement from './pages/PaymentManagements/PaymentManagement';


const App = () => {
  return (
    <div className='container'>
      <Router>
      
          <Sidebar className='sidebar' />
  
       
            <Navbar className='navbar'/>
         
    
          <div className='content'>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsManagement />} />
            <Route path="/transaction-pro" element={<PaymentManagement />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/walletmanagement" element={<WalletManagement />} />

          </Routes>
          </div>
      </Router>
    </div>
  );
};

export default App;
