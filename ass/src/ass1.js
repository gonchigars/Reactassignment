import React from 'react';
import { Container, Box, Button } from '@mui/material';

const VerticalButtons = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Button variant="contained">Button 1</Button>
        <Box sx={{mt:4,mb:4}}></Box>
        <Button variant="contained">Button 2</Button>
        <Box sx={{mt:4,mb:4}}></Box>
        <Button variant="contained">Button 3</Button>
        <Box sx={{mt:4,mb:4}}></Box>

      </Box>
    </Container>
  );
};

export default VerticalButtons;