import React from 'react';
import { Container, Box, Button } from '@mui/material';

const HorizontalButtons = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 ,ml:10,mr:10,mt:2,mb:2}}>
        <Button variant="contained">Button 1</Button>
        <Button variant="contained">Button 2</Button>
        <Button variant="contained">Button 3</Button>
      </Box>
    </Container>
  );
};

export default HorizontalButtons;