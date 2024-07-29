import React from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Box 
} from '@mui/material';

const LayoutExample = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
            <Box sx={{ml:105}}>
          <Button color="inherit">Login/Signup</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Cart</Button>
          <Button color="inherit">Connect</Button>
          </Box>
        </Toolbar>
      </AppBar>
      

      <Container sx={{ flexGrow: 1, my: 2,alignItems:"center",ml:20 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} sm={5} md={3}>
            <Button variant="contained" fullWidth>React</Button>
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <Button variant="contained" fullWidth>Java</Button>
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <Button variant="contained" fullWidth>Springboot</Button>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="body1" align='center'>
        JAVA FULL STACK 
      </Typography>

      <Box component="footer" sx={{ bgcolor: 'background.paper', p: 2 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 My App. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default LayoutExample;