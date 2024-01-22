import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoMdPlayCircle } from "react-icons/io";
import { FaGamepad } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import { BiLineChart } from "react-icons/bi";
import { BiLineChartDown } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

const iconStyle = {
  color: '#1C1BA5',
  fontSize: '24px', // Adjust the size as needed
};

const TransactionHistory = () => {
  const data = [
    { icon: <IoMdPlayCircle style={iconStyle} />, text: 'Netflix', date: '2024-01-21', text2: "abc", icon2: <BiLineChart style={iconStyle} />, amount: +1000, icon3: <GoDotFill style={iconStyle} /> },
    { icon: <FaGamepad style={iconStyle} />, text: 'Game', date: '2024-01-23', text2: 'Random', icon2: <BiLineChart style={iconStyle} />, amount: +600, icon3: <GoDotFill style={iconStyle} /> },
    { icon: <FaHeartPulse style={iconStyle} />, text: 'Health', date: '2024-01-26', text2: 'Random', icon2: <BiLineChartDown style={iconStyle} />, icon3: <GoDotFill style={iconStyle} /> },
    // Add more entries as needed
  ];

  return (
    <TableContainer component={Paper} style={{ background: 'transparent', border: 'none' }}>
      <Table>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{row.icon}</TableCell>
              <TableCell>
                <div>
                  {row.text}
                  {row.date && <span style={{ display: 'block' }}>{row.date}</span>}
                </div>
              </TableCell>
              <TableCell>
                {row.icon3}
                {row.text2}
              </TableCell>
              <TableCell>{row.icon2}</TableCell>
              <TableCell>{row.amount}$</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionHistory;
