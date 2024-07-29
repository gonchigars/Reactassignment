import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';

const SidebarWithButton = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>
          <Button variant="contained">Menu</Button>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Comedy" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Thriller" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarWithButton;