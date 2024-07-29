import React from 'react';
import { Container, Box, Button } from '@mui/material';

const BottomButton = () => {
  return (
    <Container sx={{ height: '100vh' }}>
      <Box sx={{  position: 'fixed', bottom: 20, right: 30 }}>
        <Button variant="contained">Bottom Button</Button>
      </Box>
    </Container>
  );
};

export default BottomButton;