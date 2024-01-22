import React from 'react';
import Button from '@mui/material/Button';

const DynButton = ({ variant, size, content }) => {
  return (
    <Button variant={variant} size={size}>
      {content}
    </Button>
  );
};

export default DynButton;
