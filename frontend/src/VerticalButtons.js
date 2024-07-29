import React from 'react';
import { Container, Box, Button } from '@mui/material';

const VerticalButtons = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
        <Box sx={{mt:20,mb:5}}>
        <Button variant="contained">Button 1</Button>
        </Box>
        <Box sx={{mt:3,mb:5}}>
        <Button variant="contained">Button 2</Button>
        </Box>
        <Box sx={{mt:10,mb:5}}>
        <Button variant="contained">Button 3</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default VerticalButtons;