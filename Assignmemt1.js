//Assignment1 verticalbar//
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const VerticalButtonLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }} 
      >
        Button 1
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mb: 2 }} 
      >
        Button 2
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{ mb: 2 }} 
      >
        Button 3
      </Button>
    </Box>
  );
};

export default VerticalButtonLayout;





import React from 'react';
import { Button, Box } from '@mui/material';

const HorizontalButtonLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',  
        mx: 2,  
      }}
    >
      <Button variant="contained">Button 1</Button>
      <Button variant="contained">Button 2</Button>
      <Button variant="contained">Button 3</Button>
    </Box>
  );
};

export default HorizontalButtonLayout;





// Assignment-3-AppBarComponent.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;




// ASSIGN4-src/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button, Divider } from '@mui/material';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem button>
          <Button fullWidth>Home</Button>
        </ListItem>
        <ListItem button>
          <Button fullWidth>Profile</Button>
        </ListItem>
        <ListItem button>
          <Button fullWidth>Settings</Button>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;



// ASSIGN-5/CenteredButton.js
import React from 'react';
import { Box, Button } from '@mui/material';

const CenteredButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',  // Center vertically
        alignItems: 'center',      // Center horizontally
        height: '100vh',           // Full viewport height
        gap: 2,                    // Spacing between elements
      }}
    >
      <Button variant="contained">Click Me</Button>
    </Box>
  );
};

export default CenteredButton;



// ASSIGN6/ResponsiveGrid.js
import React from 'react';
import { Grid, Button, Container } from '@mui/material';

const ResponsiveGrid = () => {
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
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Button 4</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Button 5</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth>Button 6</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResponsiveGrid;


//ASSIGN7-FIXEDBUTTON//
import React from 'react';
import Button from '@mui/material/Button';

function FixedButton() {
  return (
    <Button
      variant="contained"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      Fixed Button
    </Button>
  );
}

export default FixedButton;



//ASSIGN8-CARDWITHBUTTON//
import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

function CardWithButtons() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some description or content for the card goes here.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Accept
        </Button>
        <Button size="small" color="secondary">
          Decline
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardWithButtons;


//ASSIGN9-DIALOGWITHCONFIRAMTION//
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

function DialogWithConfirmation() {
  // State to manage the dialog open/close status
  const [open, setOpen] = useState(false);

  // Handler to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Handler to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Handler for the confirm action
  const handleConfirm = () => {
    // Add confirmation logic here
    console.log('Confirmed');
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
          <Typography>Are you sure you want to proceed?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogWithConfirmation;


//ASSIGN10-LAYOUTWITHHEADERCONTENT//
import React from 'react';
import { AppBar, Box, Button, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';

function LayoutWithHeaderContent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Header</Typography>
        </Toolbar>
      </AppBar>
      
      {/* Main Content */}
      <Container sx={{ flex: 1, py: 4 }}>
        <Grid container spacing={2}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Button variant="contained" fullWidth>
                Button {index + 1}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Footer */}
      <Box
        sx={{
          py: 2,
          textAlign: 'center',
          backgroundColor: 'background.paper',
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        <Typography variant="body2">Footer Content</Typography>
      </Box>
    </Box>
  );
}

export default LayoutWithHeaderContentFooter;




