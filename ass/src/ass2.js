import React from 'react';
import { Container, Box, Button } from '@mui/material';

const HorizontalButtons = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 ,ml:5,mr:5,mt:4,mb:4}}>
        <Button variant="contained">Button 1</Button>
        <Button variant="contained">Button 2</Button>
        <Button variant="contained">Button 3</Button>
      </Box>
    </Container>
  );
};

export default HorizontalButtons;