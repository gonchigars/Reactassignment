import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';

const SidebarWithButton = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>
          <Button variant="contained">Sidebar Button</Button>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarWithButton;