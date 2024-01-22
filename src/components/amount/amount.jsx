import React from 'react';
import { FormControl, FilledInput, InputLabel, InputAdornment } from '@mui/material';

const AmountInput = () => {
  return (
    <FormControl
      fullWidth
      sx={{
        m: 1,
        width: '380px', // Set width to 600px
        height: '300px', // Set height to 300px
        display: 'flex',
        flexDirection: 'column',
      }}
      variant="filled"
    >
      <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
      <FilledInput
        id="filled-adornment-amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </FormControl>
  );
};

export default AmountInput;
