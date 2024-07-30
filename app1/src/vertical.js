import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const VerticalButtonLayout = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <p>VERTICAL BUTTON </p>
      <Button variant="contained" sx={{ mt: 2, mb: 2 }}>
        log in
      </Button>
      <Button variant="contained" sx={{ mt: 2, mb: 2 }}>
        sign up
      </Button>
      <Button variant="contained" sx={{ mt: 2, mb: 2 }}>
        Reset
      </Button>
    </Box>
  );
};

export default VerticalButtonLayout;
