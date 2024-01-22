import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';


const columns = [
  { field: 'paymentId', headerName: 'Payment Id', type: 'number', width: 150 },
  { field: 'status', headerName: 'Status', type: 'string', width: 150 },
  { field: 'amount', headerName: 'Amount', type: 'number', width: 150 },
  { field: 'pMethod', headerName: 'Payment Method', type: 'string', width: 200 },
  {
    field: 'creationDate',
    headerName: 'Creation Date',
    type: 'date',
    width: 200,
    valueGetter: (params) => new Date(params.row.creationDate),
  },
];

const initialRows = [
  { id: 1, paymentId: 123, status: 'Pending', amount: 1000, pMethod: 'Credit Card', creationDate: '2022-01-01' },
  { id: 2, paymentId: 456, status: 'Completed', amount: 1500, pMethod: 'PayPal', creationDate: '2022-01-05' },
  { id: 3, paymentId: 789, status: 'Refunded', amount: 800, pMethod: 'Credit Card', creationDate: '2022-01-10' },
  { id: 4, paymentId: 123, status: 'Pending', amount: 1000, pMethod: 'Credit Card', creationDate: '2022-01-01' },
  { id: 5, paymentId: 456, status: 'Completed', amount: 1500, pMethod: 'PayPal', creationDate: '2022-01-05' },
  { id: 6, paymentId: 789, status: 'Succeeded', amount: 800, pMethod: 'Credit Card', creationDate: '2022-01-10' },
  // Add more rows as needed
];

const YourMuiTableComponent = () => {
  const [rows, setRows] = useState(initialRows);
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    status: '',
    pMethod: '',
    searchTerm: '',
  });
  const [view, setView] = useState('all'); // 'all', 'succeeded', 'refund'

  const handleDateRangeChange = (e) => {
    setFilters({ ...filters, startDate: e.startDate, endDate: e.endDate });
  };

  const handleStatusChange = (e) => {
    setFilters({ ...filters, status: e.target.value });
  };

  const handlePMethodChange = (e) => {
    setFilters({ ...filters, pMethod: e.target.value });
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, searchTerm: e.target.value });
  };

  const handleViewChange = (selectedView) => {
    setView(selectedView.toLowerCase()); // Convert to lowercase for consistency
    // Optionally, reset filters when changing views
    setFilters({
      startDate: null,
      endDate: null,
      status: '',
      pMethod: '',
      searchTerm: '',
    });
    // Apply filters based on the selected view
    applyFilters(selectedView.toLowerCase());
  };

  const applyFilters = (customView) => {
    const targetView = customView || view;
    // Implement logic to filter the table based on the selected filters and view
    console.log('Applying filters for view:', targetView);
    const filteredRows = initialRows.filter((row) => {
      const statusMatch =
        targetView === 'all' || row.status.toLowerCase() === targetView || (row.status === 'Refunded' && targetView === 'refunded');
      return (
        statusMatch &&
        (filters.startDate === null || new Date(row.creationDate) >= filters.startDate) &&
        (filters.endDate === null || new Date(row.creationDate) <= filters.endDate) &&
        (filters.status === '' || row.status.toLowerCase() === filters.status.toLowerCase()) &&
        (filters.pMethod === '' || row.pMethod.toLowerCase() === filters.pMethod.toLowerCase()) &&
        (filters.searchTerm === '' ||
          row.amount.toString().includes(filters.searchTerm) ||
          row.pMethod.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      );
    });
    setRows(filteredRows);
  };

  return (
    <>
    
    
    <div>
    
      {/* Header with Toggle Buttons */}
      <div style={{ marginBottom: '10px' }}>
        <Button variant={view === 'all' ? 'contained' : 'outlined'} onClick={() => handleViewChange('all')}>
          All Payments
        </Button>
        <Button variant={view === 'succeeded' ? 'contained' : 'outlined'} onClick={() => handleViewChange('succeeded')}>
          Succeeded Payments
        </Button>
        <Button variant={view === 'refunded' ? 'contained' : 'outlined'} onClick={() => handleViewChange('refunded')}>
          Refunded Payments
        </Button>
      </div>

      {/* Date Range Filter */}
      {/* Implement your DateRangePicker component here, calling handleDateRangeChange on change */}

      {/* Status Filter */}
      <FormControl>
        <TextField select label="Status" value={filters.status} onChange={handleStatusChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Refunded">Refunded</MenuItem>
          {/* Add more status options as needed */}
        </TextField>
      </FormControl>

      {/* Payment Method Filter */}
      <FormControl>
        <TextField select label="Payment Method" value={filters.pMethod} onChange={handlePMethodChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="PayPal">PayPal</MenuItem>
          {/* Add more payment method options as needed */}
        </TextField>
      </FormControl>

      {/* Search Input */}
      <FormControl>
        <TextField
          label="Search by Amount or Payment Method"
          value={filters.searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={applyFilters}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      {/* MUI DataGrid */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        components={{
          Toolbar: () => (
            <GridToolbar>
              <Button onClick={applyFilters} variant="outlined" color="primary">
                Apply Filters
              </Button>
            </GridToolbar>
          ),
        }}
      />
    </div>
    
    </>
  );
};

export default YourMuiTableComponent ;