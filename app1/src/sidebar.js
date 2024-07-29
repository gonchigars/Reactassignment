import React from 'react';
import { Drawer, List, ListItem, Button } from '@mui/material';

const SidebarWithButton = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>
          <Button variant="contained">Sidebar Button</Button>
        </ListItem>
        <ListItem>
          <Button variant="contained">Home</Button>
        </ListItem>
        <ListItem>
        <Button variant="contained">Profile</Button>
          
        </ListItem>
        <ListItem>
        <Button variant="contained">Settings</Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarWithButton;