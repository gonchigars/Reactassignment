//Vertical

import React from 'react';
import { Button, Box } from '@mui/material';

const VerticalButtonLayout = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button variant="contained"  sx={{ mt: 2, mb: 2 }}>
        Button 1
      </Button>
      <Button variant="contained"  sx={{ mt: 2, mb: 2 }}>
        Button 2
      </Button>
      <Button variant="contained"  sx={{ mt: 2, mb: 2 }}>
        Button 3
      </Button>
    </Box>
  );
};

export default VerticalButtonLayout;


/*Horizontal
-----------
import React from 'react';
import { Button, Box } from '@mui/material';

const HorizontalButtonLayout = () => {
  return (
    <Box 
      sx={{ mx: 2 }} // Add left and right margins to the container
    >
      <Box 
        display="flex" 
        justifyContent="space-between">
        <Button
          variant="contained">
          Button 1
        </Button>
        <Button
          variant="contained">
          Button 2
        </Button>
        <Button
          variant="contained">
          Button 3
        </Button>
      </Box>
    </Box>
  );
};

export default HorizontalButtonLayout;*/


/*Appbar
-------
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const AppBarWithButtons = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWithButtons;*/


/*Sidebar
---------
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';

const SidebarWithButtons = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem disablePadding>
          <ListItemButton>
              <ListItemText primary="Home" />
              <ListItemText primary="Profile" />
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SidebarWithButtons;*/



/*spacing
----------
import React from 'react';
import { Box, Button } from '@mui/material';

const CenteredContentWithSpacing = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: 2, // Adds spacing between the items
      }}
    >
      <Button variant="contained">Centered Button</Button>
    </Box>
  );
};

export default CenteredContentWithSpacing;*/



/*responsivegrid
-----------------
import React from 'react';
import { Grid, Button, Box } from '@mui/material';

const ResponsiveGridWithButtons = () => {
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

export default ResponsiveGridWithButtons;*/



/*fixed button 
--------------
import React from 'react';
import { Button } from '@mui/material';

const FixedButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      Fixed Button
    </Button>
  );
};

export default FixedButton;*/



/*dailog
---------
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';

const DialogWithConfirmationButtons = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to proceed?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithConfirmationButtons;*/



/*layout
---------
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Button, Box } from '@mui/material';

const LayoutWithHeaderMainContentFooter = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container component="main" sx={{ flexGrow: 1, mt: 4 }}>
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
      </Container>

      <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto', bgcolor: 'background.paper' }}>
        <Typography variant="body1">
          Footer Content
        </Typography>
      </Box>
    </Box>
  );
};

export default LayoutWithHeaderMainContentFooter;*/


