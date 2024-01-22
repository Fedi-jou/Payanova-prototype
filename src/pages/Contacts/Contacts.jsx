import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { FaRegSquareCheck } from 'react-icons/fa6';
import AddContactButton from '../../components/addcontact/AddContact';
import { FaCirclePlus } from "react-icons/fa6";
import HeaderWithSubtext from '../../components/header/Header';

const columns = [
  { field: 'id', headerName: 'ID', width: 20, hide: true },
  { field: 'fullname', headerName: 'Fullname', width: 400 },
 
  {
    field: 'actions',
    headerName: 'Actions',
    width: 250,
    renderCell: (params) => (
      <>
        <FiEdit onClick={() => handleEdit(params.row.id)} style={{ cursor: 'pointer', marginRight: '10px', fontSize: '20px' }} />
        <RiDeleteBin3Line onClick={() => handleDelete(params.row.id)} style={{ cursor: 'pointer', marginRight: '10px', fontSize: '20px' }} />
        <FaRegSquareCheck onClick={() => handleCheck(params.row.id)} style={{ cursor: 'pointer', fontSize: '20px' }} />
      </>
    ),
  },
];

const rows = [
  { id: 1, fullname :" jhon doe" },
  { id: 1, fullname :" jhon doe" },
  { id: 1, fullname :" jhon doe" },
  { id: 1, fullname :" jhon doe" },
];

const DataTable = () => {
  const handleEdit = (id) => {
    // Implement your edit logic
    console.log(`Edit clicked for ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement your delete logic
    console.log(`Delete clicked for ID: ${id}`);
  };

  const handleCheck = (id) => {
    // Implement your check logic
    console.log(`Check clicked for ID: ${id}`);
  };

  return (
    <>
    <HeaderWithSubtext text="Contacts"  />
    <div style={{ height: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableExtendRowFullWidth
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <AddContactButton/>
    </div>
    </>
  );
};

export default DataTable;
