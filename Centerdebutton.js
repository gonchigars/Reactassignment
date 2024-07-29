import React from 'react';
import { Container, Box, Button } from '@mui/material';

const CenteredButton = () => {
  return (
    <Container sx={{ height: '100vh' }}>
      <Box sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center',gap:2, mt: 30, mb: 10 }}>
        <Button variant="contained">Centered Button</Button>
        <Button variant="outlined">Centered Button</Button>
      </Box>
    </Container>
  );
};

export default CenteredButton;