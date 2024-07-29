import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const AppBarWithButton = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>My App</Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWithButton;