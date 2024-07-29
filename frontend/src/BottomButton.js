import React from 'react';
import { Container, Box, Button } from '@mui/material';

const BottomButton = () => {
  return (
    <Container sx={{ height: '20vh' }}>
      <Box sx={{ display:'flex',position:'fixed',bottom:16,right:16 }}>
        <Button variant="contained">Bottom Button</Button>
      </Box>
    </Container>
  );
};

export default BottomButton;