import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [range, setRange] = React.useState('This Week');

  const handleChange = (event) => {
    setRange(event.target.value);
  };

  return (
    <FormControl fullWidth style={{ width: '150px', borderRadius: '20px' }}>
      <InputLabel id="demo-simple-select-label">Range</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={range}
        label="Range"
        onChange={handleChange}
        style={{ borderRadius: 'inherit' }} // Remove borderRadius for the dropdown arrow
      >
        <MenuItem value="This Week">This Week</MenuItem>
        <MenuItem value="This Month">This Month</MenuItem>
        <MenuItem value="This Year">This Year</MenuItem>
      </Select>
    </FormControl>
  );
}
