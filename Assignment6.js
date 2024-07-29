import React from 'react';
import { Container, Grid, Button } from '@mui/material';

const ResponsiveGridButtons = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>update</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>setting</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>privacy</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResponsiveGridButtons;