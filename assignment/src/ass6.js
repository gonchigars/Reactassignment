import React from 'react';
import { Container, Grid, Button } from '@mui/material';

const ResponsiveGridButtons = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Button 1</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Button 2</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Button 3</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResponsiveGridButtons;