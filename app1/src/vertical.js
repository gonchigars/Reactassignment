import React from 'react';
import { Container, Box, Button } from '@mui/material';


const VerticalButtons = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box sx={{mt:5,mb:5}}>
        <Button variant="contained">Button 1</Button>
        </Box>
        <Box sx={{mt:5,mb:5}}>
        <Button variant="contained">Button 2</Button>
        </Box>
        <Box sx={{mt:5,mb:10}}>
        <Button variant="contained">Button 3</Button> 
        </Box>
      </Box>
    </Container>
  );
};

export default VerticalButtons;

