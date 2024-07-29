import React from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Box 
} from '@mui/material';

const LayoutExample = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>My App</Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ flexGrow: 1, my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" fullWidth>Java</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" fullWidth>React</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" fullWidth>Sql</Button>
          </Grid>
        </Grid>
      </Container>

      <Box component="footer" sx={{ bgcolor: 'background.paper', p: 2 }}>
        <Typography variant="body2" color="text.secondary" align="center">
            Javafullstack

          © 2024 My App. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default LayoutExample;