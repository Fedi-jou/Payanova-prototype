import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaRegCircle } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
const columns = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'date', headerName: 'Date Settled', width: 250 ,renderCell: (params) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <SlCalender style={{ marginRight: '8px' }} />
      {params.value}
    </div>
  ), },
  { field: 'transactionType', headerName: 'Transaction Type', width: 150 },
  { field: 'refID', headerName: 'Ref ID', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    renderCell: (params) => (
      <Button variant="outlined" color={params.value === 'active' ? 'primary' : 'secondary'}>
        <FaRegCircle style={{ marginRight: '4px' }}/>
     
      Button CTA
      </Button>
    ),
  },
  {
    field: 'viewAll',
    headerName: 'View All',
    width: 200,
    sortable: false,
    renderCell: (params) => (
      <Link to={`/view-all/${params.id}`} style={{ textDecoration: 'none', color: '#1976D2' }}>
        &#9650; Paid Details
      </Link>
    ),
  },
];

const generateRandomData = () => {
  const rowCount = 10;
  const rows = [];

  for (let i = 0; i < rowCount; i++) {
    rows.push({
      id: i,
      date: `2022-01-${Math.floor(Math.random() * 30) + 1} `,
      transactionType: `Transaction ${i + 1}`,
      refID: `Ref-${i + 1}`,
      amount: Math.floor(Math.random() * 1000) + 1,
      status: Math.random() < 0.5 ? 'active' : 'inactive',
    });
  }

  return rows;
};

const CustomizedDataGrid = () => {
  const rows = generateRandomData();

  return (
    <div style={{ height: 400, width: '80%' , display: 'flex', justifyContent: 'center', margin: '20px', padding: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        filterModel={{
          items: [
            { columnField: 'date', operatorValue: 'is', value: '022-01-01' },
            { columnField: 'status', operatorValue: 'equals', value: 'active' },
            { columnField: 'amount', operatorValue: 'startsWith', value: 'Pay' },
          ],
        }}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default CustomizedDataGrid;
