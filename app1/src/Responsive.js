import React from 'react';
import { Grid, Button, Box } from '@mui/material';

const ResponsiveGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Button 1
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Button 2
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Button 3
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Button 4
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Button 5
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>
            Button 6
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
