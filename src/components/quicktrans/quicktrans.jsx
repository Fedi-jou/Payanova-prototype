import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

const currencies = [
  { value: 'EUR', label: 'Euro' },
  { value: 'USD', label: 'US Dollar' },
  // Add more currencies as needed
];

const CompactInput = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#f0f0f0',
        padding: '8px',
        borderRadius: '4px',
        width: '360px', // Set width to 600px
        height: '300px', // Set height to 300px
      }}
    >
      <InputAdornment position="start">
        <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: 'grey', fontSize: '24px' }} /> {/* Adjust the font-size */}
      </InputAdornment>
      <TextField
        select
        variant="standard"
        style={{ flex: 1, marginLeft: '8px' }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default CompactInput;
