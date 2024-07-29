import React from 'react';
import { Container, Grid, Button } from '@mui/material';

const ResponsiveGridButtons = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={16} sm={5} md={3}>
          <Button variant="contained" fullWidth>Home</Button>
        </Grid>
        <Grid item xs={16} sm={5} md={3}>
          <Button variant="contained" fullWidth>profile</Button>
        </Grid>
        <Grid item xs={16} sm={5} md={3}>
          <Button variant="contained" fullWidth>info</Button>
        </Grid>
        <Grid item xs={16} sm={5} md={3}>
          <Button variant="contained" fullWidth>screeningtime</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResponsiveGridButtons;

