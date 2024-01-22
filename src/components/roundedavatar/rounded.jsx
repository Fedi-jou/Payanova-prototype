// Rounded.jsx

import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Avatar } from '@mui/material';
const Rounded = ({ size, color }) => {
  const roundedStyle = {
    borderRadius: '50%', // Make it a circle
   display : 'flex',
   justifyContent : "space-evenly",
   alignItems : "center",
    margin: '20px', // Add margin for spacing
  };

  return (
    <div className="rounded" style={roundedStyle}>
      <Fab color="primary" aria-label="add" size={size} style={{ margin: '10px', backgroundColor: color }}>
        <AddIcon />
      </Fab>
   
   
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ margin: '10px'}}/>
<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={{ margin: '10px'}}/>
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ margin: '10px'}} />
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ margin: '10px'}} />
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ margin: '10px'}}/>
    </div>
  );
};

export default Rounded;
