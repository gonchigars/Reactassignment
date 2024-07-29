import React from 'react';
import { Container, Box, Button } from '@mui/material';

const CenteredButton = () => {
  return (
    <Container sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex',flexDirection:'column',justifyContent: 'center', alignItems: 'center',gap:2,mt:35}}>
        <Button variant="contained">Centered Button</Button>
      </Box>
    </Container>
  );
};

export default CenteredButton;