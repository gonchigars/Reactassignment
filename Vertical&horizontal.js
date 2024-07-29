import React from 'react';
import { Container, Box, Button } from '@mui/material';

const layout = () => {

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',gap: 2, mt: 2, mb: 16 }}>
        <Button variant="contained">Button 1</Button>
        <Button variant="contained">Button 2</Button>
      
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
        <Button variant="contained">Button 1</Button>
        <Button variant="contained">Button 2</Button>
        
        </Box>
    </Container>
  );
};

export default layout;