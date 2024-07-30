import React from 'react';
import { Button, Box } from '@mui/material';

const FixedButton = () => {
  return (
    <Box>
      {/* Other content here */}
      <Button
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        Fixed Button
      </Button>
    </Box>
  );
};

export default FixedButton;
