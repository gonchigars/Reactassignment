//VerticalButtonLayout
import React from 'react';
import { Container, Box, Button } from '@mui/material';

const VerticalButtonLayout = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
        }}
      >
        <Button
          variant="contained"
          sx={{ mt: 2, mb: 2 }} 
        >
          Button 1
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, mb: 2 }} 
        >
          Button 2
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, mb: 2 }} 
        >
          Button 3
        </Button>
      </Box>
    </Container>
  );
};

export default VerticalButtonLayout;


//HorizontalButtonLayout


import React from 'react';
import { Container, Box, Button } from '@mui/material';

const HorizontalButtonLayout = () => {
  return (
    <Container
      sx={{
        mx: 4, 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: 2, 
        }}
      >
        <Button
          variant="contained"
        >
          Button 1
        </Button>
        <Button
          variant="contained"
        >
          Button 2
        </Button>
        <Button
          variant="contained"
        >
          Button 3
        </Button>
      </Box>
    </Container>
  );
};

export default HorizontalButtonLayout;



//AppBarWithButtons



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

export default AppBarWithButtons;


//SidebarWithButtons



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
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SidebarWithButtons;



//CenteredButton


import React from 'react';
import { Box, Button } from '@mui/material';

const CenteredButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        gap: 2, 
      }}
    >
      <Button
        variant="contained"
        sx={{
          mt: 2, 
          mb: 2, 
        }}
      >
        Click Me
      </Button>
    </Box>
  );
};

export default CenteredButton;


//ResponsiveGrid



import React from 'react';
import { Grid, Button, Typography, Container } from '@mui/material';

const ResponsiveGrid = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Responsive Grid with Buttons
      </Typography>
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
  );
};

export default ResponsiveGrid;


//ActionCard



import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const ActionCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is some content inside the card. It provides information about the card.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Accept
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          Decline
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActionCard;


//ConfirmationDialog




import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

const ConfirmationDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    
    console.log('Confirmed');
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to proceed with this action?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;



//Layout


import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container component="main" sx={{ flex: 1, mt: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" fullWidth>Button 1</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" fullWidth>Button 2</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" fullWidth>Button 3</Button>
          </Grid>
          {/* Add more buttons as needed */}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          p: 2,
          mt: 'auto',
          backgroundColor: 'background.paper',
          textAlign: 'center',
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 My App
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;




