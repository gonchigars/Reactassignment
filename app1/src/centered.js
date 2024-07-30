import React from 'react';
import { Box, Button } from '@mui/material';

const CenteredButton = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      height="100vh" // To center the button vertically within the viewport height
    >
      <Button variant="contained">Centered Button</Button>
    </Box>
  );
};

export default CenteredButton;
