import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';

const SidebarWithButton = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>
          <Button variant="contained">Sidebar Button</Button>
        </ListItem>
        <ListItem >
        <Button>Home</Button>
        </ListItem>
        <ListItem>
        <Button>Profile</Button>
        </ListItem>
        <ListItem>
        <Button>Dashboard</Button>
        </ListItem>
        <ListItem>
        <Button>Setting</Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarWithButton;