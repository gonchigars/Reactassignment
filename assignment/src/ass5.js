import React from 'react';
import { Container, Box, Button } from '@mui/material';

const CenteredButton = () => {
  return (
    <Container sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',gap:2 ,flexDirection:'column'}}>
        <Button variant="contained">Centered Button</Button>
      </Box>
    </Container>
  );
};

export default CenteredButton;