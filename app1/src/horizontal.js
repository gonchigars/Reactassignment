import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const HorizontalButtonLayout = () => {
  return (
    <Box
    
      display="flex"
      justifyContent="space-between"    
      alignItems="center"
      sx={{ mx: 2 }}
    >
      
      <p>HORIZONTAL BUTTONS</p>
      <Button variant="contained">Button 1</Button>
      <Button variant="contained">Button 2</Button>
      <Button variant="contained">Button 3</Button>
    </Box>
  );
};

export default HorizontalButtonLayout;
