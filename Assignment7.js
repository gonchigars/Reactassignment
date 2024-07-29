import React from 'react';
import { Container, Grid, Button, Box } from '@mui/material';

const CornerButtons = () => {
  return (
    <Container sx={{ height: '100vh' }}>
      <Grid container sx={{ height: '100%' }}>
    
    
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end',position:'fixed',bottom:16,right:16 }}>
          <Box sx={{ pb: 4 }}>
            <Button variant="contained" >Bottom Right</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CornerButtons;